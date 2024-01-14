import React, { useEffect, useState } from "react";
import { researchData } from "./Data";
import { paperNav } from "./Data";
import ResearchItem from "./ResearchItem";

const Papers = () => {

  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setProjects(researchData);
    } else {
      const newProjects = researchData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };



  return (
    <div>
      <div className="paper__filters">
        {paperNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? "active-paper" : ""
              } paper__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container cintainer grid">
        {projects.map((item) => {
          return <ResearchItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Papers;
