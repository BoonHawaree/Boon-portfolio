import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>Thai (Native)</li>
            <li>English - IELTS 6.5/9.0 (2022), TOEIC 925/990 (2025)</li>
            <li>German - TELC B2 (2019)</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>Microsoft (Word, Excel, PowerPoint, Power BI, Azure)</li>
            <li>Programming: Python, C, SQL</li>
            <li>Data Science: Numpy, Pandas, Matplotlib, Seaborn, Sklearn</li>
            <li>ML Tools: Lazypredict, Imblearn, Sci-kit learn</li>
            <li>Industrial: PLC (Siemens, Mitsubishi, Schneider)</li>
            <li>CAD: NanoCAD, SolidWorks, Autodesk Fusion, TinkerCAD</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Project Management</li>
            <li>Team Coordination</li>
            <li>Effective Communication</li>
            <li>Problem-Solving</li>
            <li>Creativity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills; 