import { useState, useEffect } from 'react';

function useActiveSection(sectionList){
    const [activeSectionID, setActiveSectionID] = useState('');

    useEffect (() => {
        const observer = new IntersectionObserver(
            (sections) => {
                sections.forEach((section) => {
                    if (section.isIntersecting) {
                        setActiveSectionID(section.target.id);
                    }
                })
            }, {threshold: 0.4}
        );

        sectionList.forEach((section) => {
            const sectionElement = document.getElementById(section.sectionID);
            if (sectionElement) observer.observe(sectionElement);
        });

        return () => observer.disconnect();
    }, [sectionList]);

    return activeSectionID;
}

function SectionNavigation({sectionsList}){

    const activeID = useActiveSection(sectionsList);

    return(
        <div className="section-nav">
            {sectionsList.map(section=> {
                const  isActive = activeID === section.sectionID;

                console.log({isActive});
                
                return(
                    <a key = {section.id} 
                        className = {`section-name ${isActive ? 'active' : ''}`} 
                        href = {`#${section.sectionID}`}>
                        <h5 > {section.title}</h5>
                        <div className='section-nav__line'></div>
                    </a>
                );
            })}
      </div>
    )

}

export default SectionNavigation;