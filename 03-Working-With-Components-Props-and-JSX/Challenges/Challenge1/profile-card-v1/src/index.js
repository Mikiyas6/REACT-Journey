import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill backgroundColor="blue" className="skill" skill="HTML+CSS" />
      <Skill backgroundColor="yellow" className="skill" skill="JavaScript" />
      <Skill backgroundColor="brown" className="skill" skill="Web-Design" />
      <Skill backgroundColor="green" className="skill" skill="Git and Github" />
      <Skill
        backgroundColor="orange"
        className="skill"
        emoji="👶"
        skill="React"
      />
    </ul>
  );
}
function Skill(props) {
  return (
    <li
      style={{ backgroundColor: props.backgroundColor }}
      className={props.className}
    >
      {props.skill} {props.emoji ?? "💪"}
    </li>
  );
}
function Intro(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
    </div>
  );
}
function Avatar(props) {
  return (
    <img
      className={props.className}
      src={props.photoName}
      alt={props.photoName}
    />
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
