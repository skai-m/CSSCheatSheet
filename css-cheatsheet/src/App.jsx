import { useState } from "react";
import "./App.css";
import Section from "./Section";

function App() {
  return (
    <>
      <Section name="Color"></Section>
      <Section name="Text"></Section>
      <Section name="Size and Position"></Section>
      <Section name="Responsive Layouts"></Section>
    </>
  );
}

export default App;
