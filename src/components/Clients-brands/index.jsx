/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Split from "../Split";
import ClientsBrandsData from "../../data/sections/clients-brands.json";

const ClientsBrands = ({ subBG, theme }) => {
  return (
    <section
      className={`clients-brand section-padding ${subBG ? "sub-bg" : ""}`}
    >
      <div className="container">
        <Slider
          className=""
          data-wow-delay=".5s"
          {...{
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            slidesToScroll: 1,
            slidesToShow: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          }}
        >
          {ClientsBrandsData.map((item, index) => (
            <div className="brands" key={item.id}>
              <h2 style={{ display: "none" }}> &nbsp; </h2>
              <div
                className="item"
                data-wow-delay={
                  index + 1 == "1"
                    ? ".1s"
                    : index + 1 == "2"
                    ? ".2s"
                    : index + 1 == "3"
                    ? ".4s"
                    : index + 1 == "4"
                    ? ".1s"
                    : index + 1 == "5"
                    ? ".3s"
                    : index + 1 == "6"
                    ? ".5s"
                    : index + 1 == "7"
                    ? ".2s"
                    : index + 1 == "8"
                    ? ".3s"
                    : ""
                }
              >
                <div className="img">
                  <img
                    src={item.darkImage}
                    alt=""
                  />
                </div>
                <Split>
                  <a
                  target='_blank'
                    href="https://reactjs.org/"
                    className="link words chars splitting"
                    data-splitting
                  >
                    {item.name}
                  </a>
                </Split>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsBrands;
