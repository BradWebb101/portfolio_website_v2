import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function EducationSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function EducationTab({ skills, isScrolled }) {
  return (
    <>
    <Col md={1}></Col>
      <Col xs={12} md={11}>
        <EducationSection
          skills={skills.slice(0, Math.floor(skills.length))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={12}>
        <EducationSection
          skills={skills.slice(Math.floor(skills.length), skills.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );

  
}

export default EducationTab;
