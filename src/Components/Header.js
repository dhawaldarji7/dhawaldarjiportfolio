import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var st = data.address.state;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#background">
              Background
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <h2 style={{ color: "coral" }}>Portfolio2.0 coming soon!</h2>
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={1}>{name ? `I'm ${name}` : null}</TypeWriter>
          </h1>
          <h3>
            I'm a
            <TypeWriter typing={1}>
              {occupation ? ` ${occupation}` : null}
            </TypeWriter>
          </h3>
          <h3>Based in {city + ", " + st}</h3>
          <h3>{description}☕❤️</h3>

          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
