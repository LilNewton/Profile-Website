function ExperienceSection() {
  const experiences = [
    {
      group: "Iraya Energies",
      role: "Software Engineer (OJT)",
      start_date: "June 2024",
      end_date: "July 2024",
    },
    {
      group: "Project Ola",
      role: "Researcher/Frontend Developer",
      start_date: "August 2024",
      end_date: "May 2025",
    },
  ];

  return (
    <>
      {experiences.map((experience) => (
        <div key={experience.group} className="card_experience">
          <div className="card_experience__description fade">
            <div className="description__group">
              <h5>{experience.group}</h5>
              <p>
                {experience.start_date} - {experience.end_date}
              </p>
            </div>
            <h3>{experience.role}</h3>
          </div>
          <div className="timeline">
            <img className="center-icon fade" />
            <div className="center-line fade"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExperienceSection;
