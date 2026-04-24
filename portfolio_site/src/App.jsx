import './App.css';
import { useState } from 'react';
import ToolsSection from './sections/Tools.jsx';
import ExperienceSection from './sections/Experience.jsx';
import ProjectSection from './sections/Project.jsx';
import ContactSection from './sections/Contacts.jsx';

{/*Components*/}
import SectionNavigation from './components/SectionNav.jsx'

function App() {

  const sections = [
        {
        id:0,
        title:'Introduction',
        sectionID: 'intro-section',
        },
        {
        id:1,
        title:'About Me',
        sectionID:'about-section',
        },
        {
        id:2,
        title:'Tools',
        sectionID:'tools-section',
        },
        {
        id:3,
        title:'Selected Projects',
        sectionID:'project-section',
        },
        {
        id:4,
        title:'Experience',
        sectionID:'experience-section',
        },
        {
        id:5,
        title:'My Contacts',
        sectionID:'my-contact-section',
        }
    ];

  const workEmail = 'chrisjohnbborigas@gmail.com'

  const greeting = 
    `Good Day! I am Chris John Borigas.
    A frontend developer and Computer Science graduate from
    Bicol University College of Science with 240 hours of
    industry experience and 2 notable projects, focusing on
    building responsive web applications.`;

  const myPhilosophy = 
    `I approach projects with a user-centered mindset,
    making sure the projects I handle deliver a smooth and
    straight forward experience for the user.`;
  
  const aboutMe = (
    <p>I'm a computer science graduate frontend developer
        with a user-centered philosophy towards designing
        the structure of features. <br /><br />
        My approach centers around creating a smooth user
        experience in consideration with project objectives.
        Utilizing my knowledge in ideation to iterate and
        innovate unto the features of projects through its
        concept, wireframe, and prototype until its release.
    </p>
    );

  
  return (
    <>
    <nav >
      <SectionNavigation sectionsList={sections} />
      <a className="fixed-email">{workEmail}</a>
    </nav>

    {/*Introduction Section*/}
    <header id="intro-section" className="container__section">
        <h2>Chris John B. Borigas</h2>
        <h1>Frontend Developer</h1>
        <p> {greeting}</p>
        <a className='primary_btn'>Resume</a>
    </header>

    {/* About Section */}
    <div id="about-section" className="container__section">
        <h2>{myPhilosophy}</h2>
        <h3 className="section-header">{sections[1].title}</h3>
        <div className="about-me">
            <h2>Hello There!</h2>
            {aboutMe}
        </div>
    </div>

    {/* Tools Section */}
    <div id="tools-section" className="container__section">
      <h3 className="section-header">{sections[2].title}</h3>
      <ToolsSection />
    </div>

    {/*Projects Section*/}
    <div id = "project-section" className="container__section">
      <h3 className="section-header">{sections[3].title}</h3>
      <ProjectSection />
    </div>

    {/*Experience Section*/}
    <div id = "experience-section" className="container__section">
      <h3 id = 'experience' className="section-header">{sections[4].title}</h3>
      <ExperienceSection />
    </div>
    
    {/*Contact Section*/}
    <footer id='my-contact-section' className="container__section">
      <h4>{sections[5].title}</h4>
      <h3>{workEmail}</h3>
      <ContactSection />
    </footer>
    </>
  )
}

export default App
