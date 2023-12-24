import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification serction">
      <div className="qualification__header">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
      </div>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualifications__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Science and Engineering
                </h3>
                <span className="qualification__subtitle">
                  Sylhet Engineeringg College
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - Present
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Android Development</h3>
                <span className="qualification__subtitle">Self learner</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
