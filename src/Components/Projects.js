import React from "react";

const projects = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/" + projects.image;
      return (
        <div key={projects.title} className="columns projects-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="projects-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                  <p>{projects.description}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="projects">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>
            <span>Few of my projects</span>
          </h1>

          <div
            id="projects-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
