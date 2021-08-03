import React from "react";
import "./App.css";

const App = () => {
  return (
    <section id="sectionContainer">
      <div>What the fuck do you want?</div>
    </section>
  );
};

const AppWrapper = () => {
  return (
    <section id="AppWrapper">
      <App />
    </section>
  );
};

export default AppWrapper;
