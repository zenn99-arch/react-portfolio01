import React from "react";
import Link from 'next/link'

const IntroTxt = ({ subBG }) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/freelancer.png)" }}
      data-overlay-dark="0"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6 style={{color:'white'}} >Hello, I&apos;m</h6>
              <h1>Bimal Ray</h1>
              <h4>Web Devloper </h4>
              <div className="social-icon">
                <a target='_blank' href="https://github.com/zenn99-arch" className="icon">
                  <i className="fab fa-github"></i>
                </a>
                <a target='_blank' href="https://dribbble.com/Bimalray99" className="icon">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a target='_blank' href="https://www.instagram.com/creative___process/" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target='_blank' href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
              <Link href="/home/home3-dark">
                <a className="simple-btn mt-40">
                  Creative studio
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
