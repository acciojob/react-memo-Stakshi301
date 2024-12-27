import React,{ useState, memo } from "react";

const SkillItem = memo(({ skill }) => {
  return <li>{skill}</li>;
});

const AddSkills = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const addSkill = () => {
    if (skill && !skills.includes(skill)) {
      setSkills((prevSkills) => [...prevSkills, skill]);
      setSkill("");
    }
  };

  return (
    <div>
      <h3>Add Skills</h3>
      <input
        type="text"
        value={skill}
        onChange={handleChange}
        placeholder="Enter a skill"
      />
      <button onClick={addSkill}>Add Skill</button>
      <ul>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
};

export default AddSkills;
