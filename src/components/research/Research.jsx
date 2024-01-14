import React from "react";
import "./research.css";
import Papers from "./Papers";

const Research = () => {
  return (
    <section className="research section" id="research">
      <div className="research__header">
        <h2 className="research__title">Research</h2>
        <span className="research__subtitle">My Research Works</span>
      </div>
      <Papers/>
    </section>
  );
};

export default Research;
