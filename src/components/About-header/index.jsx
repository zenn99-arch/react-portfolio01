import React from "react";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/vid.png)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>About Me</h1>
              <div className="path">
                <a href="/">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  About ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
