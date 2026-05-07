import "./App.css";
import { useState, useEffect } from "react";
import ToolsSection from "./sections/Tools.jsx";
import ExperienceSection from "./sections/Experience.jsx";
import ProjectSection from "./sections/Project.jsx";
import ContactSection from "./sections/Contacts.jsx";

{
  /*Components*/
}
import SectionNavigation from "./components/SectionNav.jsx";
import Background from "./components/Background.jsx";

/* PDF Window Pop-up: Made to pop-up at the center of the users
  monitor instead of a new tab */
function handleViewPDF(fileURL) {
  const width = 800;
  const height = 800;

  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const windowFeatures = `popup, 
    width=${width}, 
    height=${height}, 
    left=${left}, 
    top=${top}, 
    noopener, 
    noreferrer`;

  window.open(fileURL, "_blank", windowFeatures);
}

function App() {
  const sections = [
    {
      title: "Introduction",
      sectionID: "intro-section",
    },
    {
      title: "About Me",
      sectionID: "about-section",
    },
    {
      title: "Tools",
      sectionID: "tools-section",
    },
    {
      title: "Selected Projects",
      sectionID: "project-section",
    },
    {
      title: "Experience",
      sectionID: "experience-section",
    },
    {
      title: "My Contacts",
      sectionID: "my-contact-section",
    },
  ];

  const workEmail = "chrisjohnbborigas@gmail.com";

  /* ${import.meta.env.BASE_URL} was added to make the url 
    correctly direct to the file during deployment */
  const resumeURL = `${import.meta.env.BASE_URL}Chris-John-Borigas-Resume.pdf`;

  const greeting = `Good Day! I am Chris John Borigas.
    A frontend developer and Computer Science graduate from
    Bicol University College of Science with 240 hours of
    industry experience and 2 notable projects, focusing on
    building responsive web applications.`;

  const myPhilosophy = `I approach projects with a user-centered mindset,
    making sure the projects I handle deliver a smooth and
    straight forward experience for the user.`;

  const aboutMe = (
    <>
      I'm a computer science graduate frontend developer with a user-centered
      philosophy towards designing the structure of features. <br />
      <br />
      My approach centers around creating a smooth user experience in
      consideration with project objectives. Utilizing my knowledge in ideation
      to iterate and innovate unto the features of projects through its concept,
      wireframe, and prototype until its release.
    </>
  );

  /* Used to observe whether elements that have the class 'fade'
    are visible to the user by a factor of the threshold; 
    0.5 = 50% visibility) */
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("out", !entry.isIntersecting);
        });
      },
      { threshold: 0.5 },
    );

    const elements = document.querySelectorAll(".fade");
    elements.forEach((element) => fadeObserver.observe(element));

    return () => fadeObserver.disconnect();
  }, []);

  return (
    <>
      <Background />

      <nav>
        <SectionNavigation sectionsList={sections} />
        <a className="fixed-email">{workEmail}</a>
      </nav>

      {/*Introduction Section*/}
      <header id="intro-section" className="container__section">
        <h2 className="fade">Chris John B. Borigas</h2>
        <h1 className="fade">Frontend Developer</h1>
        <p className="fade"> {greeting}</p>
        <button
          onClick={() => handleViewPDF(resumeURL)}
          className="primary_btn fade"
        >
          Resume
        </button>
      </header>

      {/* About Section */}
      <div id="about-section" className="container__section">
        <h2 className="fade">{myPhilosophy}</h2>
        <h3 className="section-header fade">{sections[1].title}</h3>
        <div className="about-me fade">
          <h2>Hello There!</h2>
          <p>{aboutMe}</p>
        </div>
      </div>

      {/* Tools Section */}
      <div id="tools-section" className="container__section">
        <h3 className="section-header fade">{sections[2].title}</h3>
        <ToolsSection />
      </div>

      {/*Projects Section*/}
      <div id="project-section" className="container__section">
        <h3 className="section-header fade">{sections[3].title}</h3>
        <ProjectSection />
      </div>

      {/*Experience Section*/}
      <div id="experience-section" className="container__section">
        <h3 id="experience" className="section-header fade">
          {sections[4].title}
        </h3>
        <ExperienceSection />
      </div>

      {/*Contact Section*/}
      <footer id="my-contact-section" className="container__section">
        <h4 className="fade">{sections[5].title}</h4>
        <h3 className="fade">{workEmail}</h3>
        <ContactSection />
      </footer>
    </>
  );
}

export default App;
