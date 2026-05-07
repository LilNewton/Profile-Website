import { useState, useEffect } from "react";

function useActiveSection(sectionList) {
  const [activeSectionID, setActiveSectionID] = useState("");

  /* Observer used to indicate the visible section for 
    Section navigation title highlighting */
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (sections) => {
        sections.forEach((section) => {
          /* If the section occupies a percentage of the screen 
            based on the threshold, update the activeSectionID
            via the section element's id */
          if (section.isIntersecting) {
            setActiveSectionID(section.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    /* Based on the sectionList, start obversing the sections
      via element id */
    sectionList.forEach((section) => {
      const sectionElement = document.getElementById(section.sectionID);
      if (sectionElement) {
        sectionObserver.observe(sectionElement);
      }
    });

    return () => sectionObserver.disconnect();
  }, [sectionList]);

  return activeSectionID;
}

function SectionNavigation({ sectionsList }) {
  const activeID = useActiveSection(sectionsList);

  return (
    <div className="section-nav">
      {sectionsList.map((section, index) => {
        const isActive = activeID === section.sectionID;

        return (
          <a
            key={index}
            className={`section-name ${isActive ? "active" : ""}`}
            href={`#${section.sectionID}`}
          >
            <h5> {section.title}</h5>
            <div className="section-nav__line"></div>
          </a>
        );
      })}
    </div>
  );
}

export default SectionNavigation;
