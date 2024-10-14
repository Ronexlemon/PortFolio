import React from "react";
import expGreen from "../../assets/expGreen.svg";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";


function Experience() {

    const experienceData = [
      {
        id: 1,
        company: "HIFADHI.",
        jobtitle: "Backend / Smart Contract Development",
        startYear: "May 2024 ",
        endYear: "Present",
        links:
          "https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing",
      },
      {
        id: 2,
        company: "Exion.",
        jobtitle: "Backend developer / Blockchain (co-founder)",
        startYear: "Jan 2024 ",
        endYear: "Present",
        links:
          "https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing",
      },
      {
        id: 3,
        company: "Atlas KE.",
        jobtitle: "Backend Developer / Blockchain Dev",
        startYear: "Dec 2023 ",
        endYear: " June 2024",
        links:
          "https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing",
      },
      {
        id: 4,
        company: "Celo Africa Dao",
        jobtitle: "Core Contributor / BlockChain Developer",
        startYear: "Oct 2023 ",
        endYear: "Present",
        links:
          "https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing",
      },
      {
        id: 5,
        company: "Lisk ",
        jobtitle: "Ambassador",
        startYear: "Jan 2024 ",
        endYear: "Aug 2024",
        links:
          "https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing",
      },
      
    ];

  return (
    <div className="experience" id="experience">
      <div className="experience-body">
        <div className="experience-image">
          <img src={expGreen} alt="expGreen" />
        </div>
        <div className="experience-description">
          <h1 className="experience-title">
            <span style={{ color: "#32CD30" }}>Work</span> Experience
          </h1>
          {experienceData.map((exp) => (
            <a
              href={exp.links}
              key={exp.id}
              className="experience-tag"
              
            >
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
