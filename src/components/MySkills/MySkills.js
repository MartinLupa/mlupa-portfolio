import { useEffect, useState } from "react";
import "./MySkills.css";

const mainSkillsData = [
  { tech: "HTML", icon: require("./icons/html.png") },
  { tech: "CSS", icon: require("./icons/css.png") },
  { tech: "JavaScript", icon: require("./icons/javascript.png") },
  { tech: "React", icon: require("./icons/react.png") },
  { tech: "SASS", icon: require("./icons/sass.png") },
  { tech: "Bootstrap", icon: require("./icons/bootstrap.png") },
];

const secondarySkillsData = [
  { tech: "NextJS", icon: require("./icons/nextjs.png") },
  { tech: "node", icon: require("./icons/node.png") },
  { tech: "MySQL", icon: require("./icons/mysql.png") },
  { tech: "MongoDB", icon: require("./icons/mongodb.png") },
];

export const MySkills = () => {
  const [mainSkills, setMainSkills] = useState([]);
  const [secondarySkills, setSecondarySkills] = useState([]);

  useEffect(() => {
    setMainSkills(mainSkillsData);
    setSecondarySkills(secondarySkillsData);
  }, [mainSkills, secondarySkills]);

  return (
    <div className="myskills-container">
      <div className="spacing-bar__long"></div>
      <h2>Skills</h2>
      <div className="skills-lists">
        <h4>I feel confident with:</h4>
        <ul className="stack-list">
          {mainSkills.map((skill) => (
            <li key={skill.icon}>
              <img src={skill.icon} alt="" />
            </li>
          ))}
        </ul>
        <h4>I have also worked with:</h4>
        <ul className="stack-list">
          {secondarySkills.map((skill) => (
            <li key={skill.icon}>
              <img src={skill.icon} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
