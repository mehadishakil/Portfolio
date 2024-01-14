import React from "react";

const PaperAbstract = () => {
  return (
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>

      <h3 className="services__modal-title">Product Designer</h3>
      <p className="services__modal-description">
        Service with more than 3 years of experience. Providing quality work to
        clients and companies.
      </p>

      <a className="paper__button">
        Read Paper <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default PaperAbstract;
