import React from "react";
import Accordion from "../AccordionTemplate/Accordion";

function Accordions() {
  return (
    <div>
      <Accordion
        title="Story of P-A"
        image="https://i.imgur.com/btSGJZU.png"
        content="Pierre-Alexandre is a french canadian boi who is just starting out in the world of coding"
      />
      <Accordion
        title="Hangman Game"
        image="https://i.imgur.com/eAVjTDX.png"
        content="My very first project made with plain old Javascript"
      />
      <Accordion
        title="The Hedron Archive"
        image="https://deckmaster.info/images/sets/OGW_C.png"
        content="This project is my first functioning website made with Node, Express and MongoDB. My favourite project I have done so far."
      />
      <Accordion
        title="GA.fm"
        image="https://i.imgur.com/eK74Vzb.png"
        content="First Django app"
        background= 'red'
      />
      <Accordion
        title="Eventer"
        image="https://i.imgur.com/7gblHy3.png"
        content="Group project made in react"
      />
    </div>
  );
}

export default Accordions;
