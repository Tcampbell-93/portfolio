const Resume = () => {
    return (
      <div className="container">
        <h2>Resume</h2>
        <a href="../pdfs/resume.pdf" download className="resume-link">
          Downloadable Resume coming soon
        </a>
        <h3>Proficiencies:</h3>
        <ul className="proficiencies-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
          <li>MySQL</li>
        </ul>
      </div>
    );
  };
  
  export default Resume;