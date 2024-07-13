import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    name: "Java",
    level: "intermediate",
    color: "#ffa630",
  },
  {
    name: "React",
    level: "beginner",
    color: "#d1495b",
  },
  {
    name: "JavaScript",
    level: "intermediate",
    color: "#611c35",
  },
  {
    name: "HTML+CSS",
    level: "intermediate",
    color: "#00798c",
  },
  {
    name: "Git & GitHub",
    level: "beginner",
    color: "#00711c",
  },
];

function App() {
  return (
    <div className="container">
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <Avatar imgURL="./А Т Б.jpg" />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar(prop) {
  return (
    <div className="img-wrapper">
      <img src={prop.imgURL} alt="myPhoto" className="photo" />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <Skill
          key={skill.name}
          content={skill.name}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h3 className="name">Ivan Cherkes</h3>
      <p className="myself">
        Young software engineer from Ukraine 🇺🇦. Student at Atlantic
        Technological University in Ireland 🇮🇪. In my spare time from studying I
        like to work out, do boxing, run and travelling. Enjoying and exploring
        the life :)
      </p>
      <h4>Слава Україні</h4>
    </div>
  );
}

function Skill({ color, content, level }) {
  const style = {
    backgroundColor: color,
  };


  return (
    <div className="skill" style={style}>
      {content}
      <span>
         {level === "beginner" && "😜"}
         {level === "intermediate" && "👺"}
         {level === "strong" && "🧠"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
