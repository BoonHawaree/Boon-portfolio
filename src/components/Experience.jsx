import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="projects">
      <h2>Professional Experience</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>MLOps in Manufacturing using Azure</h3>
          <p className="project-date">Senior Project</p>
          <ul>
            <li>Researched challenges in ML model maintenance from past studies</li>
            <li>Implemented MLOps framework on Microsoft Azure using a sample dataset</li>
            <li>Developed automated ML pipeline for manufacturing process optimization</li>
          </ul>
        </div>
        
        <div className="project-card">
          <h3>Temasek Foundation's SCALE Exchange Program</h3>
          <p className="project-date">Sep 2023 - Mar 2024</p>
          <ul>
            <li>Representative of KMUTT Engineering Students in Singapore</li>
            <li>Led social service activities, teaching TinkerCAD and English</li>
            <li>Participated in workshops on drones, simulation, and photogrammetry</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Make X National-International Robotic Competition</h3>
          <p className="project-date">Oct 2022 - Nov 2022</p>
          <ul>
            <li>Member of Referee Team</li>
            <li>Judged national round teams for Thailand's representatives</li>
            <li>Refereed international semi-final round</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience; 