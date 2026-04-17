function ToolsSection() {

    const toolCategories = {
        'LANGUAGES': [
        { title: 'C Language', icon: 'c_language_logo.svg' },
        { title: 'Java', icon: 'java_logo.svg' },
        { title: 'Python', icon: 'python_logo.svg' },
        { title: 'Javascript', icon: 'javascript_logo.svg' },
        { title: 'CSS', icon: 'css_logo.svg' },
        { title: 'PHP', icon: 'php_logo.svg' }
        ],
        'FRAMEWORKS': [
        { title: 'React.js', icon: 'react_logo.svg' },
        { title: 'Streamlit', icon: 'streamlit_logo.svg' },
        { title: 'Laravel', icon: 'laravel_logo.svg' }
        ],
        'DESIGNS': [
        { title: 'Canva', icon: 'canva_logo.svg' },
        { title: 'Figma', icon: 'figma_logo.svg' },
        { title: 'Penpot', icon: 'penpot_logo.svg' }
        ],
        "VERSION CONTROL": [
        { title: 'Git', icon: 'git_logo.svg' },
        { title: 'Github', icon: 'github_logo.svg' }
        ],
        'DOCUMENTATION': [
        { title: 'MS Word', icon: 'msword_logo.svg' },
        { title: 'Google Docs', icon: 'google_docs_logo.svg' },
        { title: 'Libre Office', icon: 'libreoffice_logo.svg' },
        { title: 'MS Excel', icon: 'msexcel_logo.svg' },
        { title: 'Google Sheets', icon: 'google_sheets_logo.svg' }
        ]
    }; 

    return(
        <>
        {Object.entries(toolCategories).map(([categoryName, tools]) => (
            <div key={categoryName} className="card card_tool">
                <h2>{categoryName}</h2>
                <div className="tool-grid">
                    {tools.map(tool => (
                        <div key = {tool.title} className='tool'>
                            <img src={new URL(`../assets/icons/${tool.icon}`, import.meta.url).href} 
                                alt={tool.title}/>
                            <h5>{tool.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        ))}
        </>
    )
}

export default ToolsSection;

