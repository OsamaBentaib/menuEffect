import React from "react";
import i1 from "./img/1.jpg";
import i2 from "./img/2.jpg";
import i3 from "./img/3.jpg";
import i4 from "./img/4.jpg";
import i5 from "./img/5.jpg";
function App() {
  return (
    <main>
      <div className="frame">
        <div className="frame__title-wrap">
          <h1 className="frame__title">Menu Effect</h1>
          <p className="frame__info">Project by Oussama Bentaib</p>
        </div>
        <div className="frame__links">
          <a href="https://github.com/OsamaBentaib/menuEffect">GitHub</a>
        </div>
      </div>
      <nav className="menu">
        <div className="menu__item">
          <a href="/" className="menu__item-link">
            Home
          </a>
          <img className="menu__item-img" src={i2} alt="..." />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <a href="/" className="menu__item-link">
            Work
          </a>
          <img className="menu__item-img" src={i1} alt="..." />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Work</span>
              <span>Work</span>
              <span>Work</span>
              <span>Work</span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <a href="/" className="menu__item-link">
            Portfolio
          </a>
          <img className="menu__item-img" src={i3} alt="..." />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Portfolio</span>
              <span>Portfolio</span>
              <span>Portfolio</span>
              <span>Portfolio</span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <a href="/" className="menu__item-link">
            Our story
          </a>
          <img className="menu__item-img" src={i5} alt="..." />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Story</span>
              <span>Story</span>
              <span>Story</span>
              <span>Story</span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <a href="/" className="menu__item-link">
            Contact
          </a>
          <img className="menu__item-img" src={i4} alt="..." />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="frame">
        <p>
          Images by <a href="https://www.unsplash.com/">unsplash</a>
        </p>
      </div>
    </main>
  );
}

export default App;
