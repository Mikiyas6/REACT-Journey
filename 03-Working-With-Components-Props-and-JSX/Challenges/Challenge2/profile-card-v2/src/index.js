import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar className="avatar" photoName="profile.png" />
      <div className="data">
        <Intro
          heading="Mikiyas Teowodroes"
          description="Frontend Web Developer. When I'm not coding, I like to play Video Games and Hangout with my friends."
        />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </ul>
  );
}
function Skill({ skill }) {
  let emoji = "";
  switch (skill.level) {
    case "beginner":
      emoji = "👶";
      break;
    case "intermediate":
      emoji = "👍";
      break;
    case "advanced":
      emoji = "💪";
      break;
  }
  return (
    <li style={{ backgroundColor: skill.color }}>
      {skill.skill} {emoji}
    </li>
  );
}
function Intro({ heading, description }) {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
}
function Avatar({ className, photoName }) {
  return <img className={className} src={photoName} alt={photoName} />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
