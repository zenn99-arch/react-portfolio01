import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Best Features</h6>
          <h3>Services.</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-link"></span>
              <h6>Graphics Design</h6>
              <p>
                It includes logo making, poster design, social media post, brochure Making .
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-scissors"></span>
              <h6>Video Editing</h6>
              <p>
              Different processes like Importing and organizing footage, Rough cut, Fine cut, Color correction, Audio editing, transitions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-film"></span>
              <h6>3D Animations</h6>
              <p>
                Asthetic Product Animations by creating Models using Blender. 
              </p>
            </div>
          </div>
        </div>
        <div className="smore custom-font">
          <Link href="/about/about-dark">Discover More</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Services3;
