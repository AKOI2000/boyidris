import { useState } from "react";
import AccordionItems from "./AccordionItems";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItems
          key={index + 1}
          curOpen={curOpen}
          onOpen={setCurOpen}
          index={index + 1}
          title={item.title}
          stack={item?.stack}
        >
          {" "}
          {item.text}
        </AccordionItems>
      ))}
    </div>
  );
}
