import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who am i ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                I am a highly skilled and experienced freelance graphic designer with a passion for creating visually stunning designs that effectively communicate a message. With over 5 years of experience in the industry, I have a diverse portfolio that showcases my ability to work in a variety of styles and mediums, from print to digital. I am a creative problem-solver, able to understand the needs of my clients and deliver high-quality work that exceeds their expectations. I am always looking for new challenges and opportunities to grow as a designer.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
