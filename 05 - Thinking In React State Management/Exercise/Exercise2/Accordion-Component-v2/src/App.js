import { useState } from "react";
import "./styles.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  function handleToggleAccordion(id) {
    setCurrOpen(id === currOpen ? null : id);
  }
  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          num={index + 1}
          title={element.title}
          handleToggleAccordion={handleToggleAccordion}
          currOpen={currOpen}
        >
          <div className="content-box">{element.text}</div>
        </AccordionItem>
      ))}
      <AccordionItem
        num={22}
        title={"Test 1"}
        handleToggleAccordion={handleToggleAccordion}
        currOpen={currOpen}
      >
        <div className="content-box">
          <p>Allows React developer to:</p>
          <ul>
            <li>Break up UI into components</li>
            <li>Make Component Reusable</li>
            <li>Place Efficiently</li>
          </ul>
        </div>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({
  num,
  title,
  handleToggleAccordion,
  currOpen,
  children,
}) {
  const isOpen = num === currOpen;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => {
        handleToggleAccordion(num);
      }}
    >
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && children}
    </div>
  );
}
