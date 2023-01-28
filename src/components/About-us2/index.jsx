/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  In my 4 years working experience I have completed lots of project.
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
               i am a graphic designer who creates the graphics primarily for published, printed, or electronic media, such as brochures and advertising.
              </p>
              <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
                These are some of my works.
              </p>
              <Split>
               
                  <a
                  href="/Bimal.Ray1.pdf"
                    className="words chars splitting simple-btn custom-font mt-30 wow"
                    data-splitting
                  >
                    <span>Download CV</span>
                  </a>
              
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/b1.jpg" alt="" />
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={90}
                      className="custom-font"
                      strokeWidth={2}
                      text={`${90}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>Graphic</span>
                    <h6>Media</h6>
                  </div>
                </div>
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={75}
                      strokeWidth={2}
                      className="custom-font"
                      text={`${75}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>Video</span>
                    <h6>Media</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
