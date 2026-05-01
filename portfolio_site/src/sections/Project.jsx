function getImageURL(url) {
  return new URL(`${url}`, import.meta.url).href;
}

function ProjectSection() {
  const projects = [
    {
      title: "Raya",
      subtitle: "Chatbot for Unstructured Research Data",
      toolsUsed: ["Python", "Streamlit", "Figma"],
      image: "../assets/no-image-provided.png",
    },
    {
      title: "OLA",
      subtitle:
        "A Games of the Generals (GG) AI Strategy Engine Trained Using Self-Play",
      toolsUsed: ["Javascript", "React.js", "CSS"],
      image: "../assets/project-images/ola/home.png",
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div key={project.title} className="card_project fade">
          <div className="project-detail">
            <div className="project-detail__title">
              <h4 className="project-detail__count">
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
