/* Images must be imported before being used. This method was 
  preferred over 'new URL' due to 'new URL' not working during 
  deployment because the images are located in subfolders; for 
  'new URL' to work during deployment, path needs to be very
  literal (see Tools.jsx for working implementation). */
function getImageURL(url) {
  return `${import.meta.env.BASE_URL}${url}`;
}

function ProjectSection() {
  const projects = [
    {
      title: "Raya",
      subtitle: "Chatbot for Unstructured Research Data",
      toolsUsed: ["Python", "Streamlit", "Figma"],
      image: "project-images/no-image-provided.png",
    },
    {
      title: "OLA",
      subtitle:
        "A Games of the Generals (GG) AI Strategy Engine Trained Using Self-Play",
      toolsUsed: ["Javascript", "React.js", "CSS"],
      image: "project-images/ola/home.png",
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div key={project.title} className="card_project fade">
          <div className="project-detail">
            <div className="project-detail__title">
              <h4 className="project-detail__count">
                {/* Makes the numbering appear as '01' instead 
                  of just '1' */}
                {(index + 1).toString().padStart(2, "0")}
              </h4>
              <h2>{project.title}:</h2>
              <h4 className="subtitle">{project.subtitle}</h4>
            </div>
            <ul className="project-detail__tools">
              {project.toolsUsed.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <img src={getImageURL(project.image)} />
        </div>
      ))}
    </>
  );
}

export default ProjectSection;
