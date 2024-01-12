import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
  /*========================== Change Background Header ==============================*/
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if(this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const[Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 80; // Adjusted for header height
      let currentSection = '#home'; // Default to home if no section is found
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveNav(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Mehadi Hasan</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>  Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#research" onClick={() => setActiveNav('#research')} className={activeNav === "#research" ? "nav__link active-link" : "nav__link"}>
              <i class="bx bx-book-open nav__icon"></i> Research
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === "#blog" ? "nav__link active-link" : "nav__link"}>
              <i class="bx bxl-blogger nav__icon"></i> Blog
              </a>
            </li>


            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

          </ul>

          <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
        <i class="uil uil-apps"></i>
        </div>

      </nav>
    </header>
  )
}

export default Header