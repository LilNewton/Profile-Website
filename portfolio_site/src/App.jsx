import './App.css';
import ToolsSection from './sections/Tools.jsx';
import ExperienceSection from './sections/Experience.jsx';
import ProjectSection from './sections/Project.jsx';

function App() {
  const contacts = [
    {
      title : 'Gmail',
      icon : 'gmail_logo.svg'
    },
    {
      title : 'Github',
      icon : 'github_logo.svg'
    },
    {
      title : 'LinkedIn',
      icon : 'linkedin_logo.svg'
    },
    {
      title : 'Facebook',
      icon : 'facebook_logo.svg'
    }
  ];

  return (
    <>
    <div className="sidebar">

    </div>

    {/*Introduction Section*/}
    <div id="intro-section" className="container__section">
        <h2>Chris John B. Borigas</h2>
        <h1>Frontend Developer</h1>
        <p>Good Day! I am Chris John Borigas.
            A frontend developer and Computer Science graduate from
            Bicol University College of Science with 240 hours of
            industry experience and 3 notable projects, focusing on
            building scalable and responsive web solutions.
        </p>
        <a className='primary_btn'>Resume</a>
    </div>

    {/* About Section */}
    <div id="about-section" className="container__section">
        <h2>I approach projects with a user-centered mindset,
            making sure the projects I handle deliver a smooth and
            straight forward experience for the user.
        </h2>
        <h3 className="section-header">About Me</h3>
        <div className="about-me">
            <h2>Hello There!</h2>
            <p>I'm a computer science graduate frontend developer
                with a user-centered philosophy towards designing
                the structure of features. <br /><br />
                My approach centers around creating a smooth user
                experience in consideration with project objectives.
                Utilizing my knowledge in ideation to iterate and
                innovate unto the features of projects through its
                concept, wireframe, and prototype until its release.
            </p>
        </div>
    </div>

    {/* Tools Section */}
    <div id="tools-section" className="container__section">
      <h3 className="section-header">Tools</h3>
      <ToolsSection />
    </div>

    {/*Projects Section*/}
    <div className="container__section">
      <h3 className="section-header">Selected Projects</h3>
      <ProjectSection />
    </div>

    {/*Experience Section*/}
    <ExperienceSection />
    
    {/*Contact Section*/}
    <footer id='contact_info' className="container__section">
      
      <h4>My Contacts</h4>
      <h3>chrisjohnbborigas@gmail.com</h3>
      <div className="contacts">
        {contacts.map(contact => 
          <a key = {contact.title}>
            <img className='contact__icon'
              src={new URL(`./assets/icons/${contact.icon}`, 
                import.meta.url).href} alt={contact.title}/>
          </a>
        )}
        
      </div>
    </footer>
    </>
  )
}

export default App
