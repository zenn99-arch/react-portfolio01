/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img style={{height:'30px', width:'200px'}} src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> bimal.ray99@gmail.com
                  </li>
                  <li>
                    <span>Address : </span> Bhubaneswar.
                  </li>
                  <li>
                    <span>Phone : </span> (+91) 7504036782
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                <a target='_blank' rel="noreferrer" href="https://github.com/zenn99-arch" className="icon">
                  <i className="fab fa-github"></i>
                </a>
                <a target='_blank' rel="noreferrer" href="https://dribbble.com/Bimalray99" className="icon">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/creative___process/" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target='_blank' rel="noreferrer" href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/creative___process/">
                  <img src="/img/insta/1.png" alt="" />
                </a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/creative___process/">
                  <img src="/img/insta/2.jpeg" alt="" />
                </a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/creative___process/">
                  <img src="/img/insta/3.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2022, Bimal Ray. Made with passion by <a href="#0">React Js</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
