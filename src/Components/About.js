import React from "react";

const About = ({ data }) => {
  if (data) {
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="aboutContainer">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Dhawal's Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>
              <span>About Me</span>
            </h2>
            <p className="bio">{bio}</p>
            <p>
              <a
                href={resumeDownload}
                className="downloadButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-download"></i>Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
