import React, { useState } from "react";

const ResearchItem = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <span className="papers__button" onClick={() => toggleTab(1)}>
        <div className="paper__card">
          <img src={item.image} alt="" className="paper__img" />
          <p className="paper__title">{item.title}</p>
        </div>
      </span>

      <div
        className={
          toggleState === 1 ? "papers__modal active-modal" : "papers__modal"
        }
      >
        <div className="papers__modal-content">
          <i onClick={() => toggleTab(0)} className="uil uil-times papers__modal-close"></i>
          <h3 className="papers__modal-title">{item.title}</h3>
          <p className="papers__modal-description">{item.description}</p>
            <a href={item.link} target="_blank" className="paper__link-button"> Read Full Paper <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
        </div>
      </div>
    </div>
  );
};

export default ResearchItem;
