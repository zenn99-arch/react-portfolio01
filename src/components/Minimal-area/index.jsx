/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/profile.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About me.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Coming from a background in design, I love creating pages where I’m able to actually create enjoyable interactions and experiences for everyone! I’m now able to truly call myself a Developer.
                </p>
              </Split>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
