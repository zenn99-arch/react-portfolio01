/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".graphic">Graphics</span>
              <span data-filter=".web">Web Page</span>
              <span data-filter=".brand">3D</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/01.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Proflo-u Device</h6>
                <span>
                  <a href="#0">Blender</a>, <a href="#0">Solid Works</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://cred-webclone.netlify.app">
                  <a>
                    <img src="/img/portfolio/mas/02.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>CRED Webclone</h6>
                <span>
                  <a href="#0">React</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/04.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Energies of power</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://proflou.com/">
                  <a>
                    <img src="/img/portfolio/mas/03.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>PROFLO-U</h6>
                <span>
                  <a href="#0">React</a>,<a href="#0">GSAP</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/05.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>3D printer</h6>
                <span>
                  <a href="#0">Blender</a>,<a href="#0">Solid Works</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://react-pagetransition-framermotion.netlify.app/">
                  <a>
                    <img src="/img/portfolio/mas/06.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="#0">React</a>,<a href="#0">Framer Motion</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/08.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Brochure</h6>
                <span>
                  <a href="#0">Photoshop</a>,<a href="#0">Illustrator</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/07.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>
           
            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://webclone-disney.netlify.app/">
                  <a>
                    <img src="/img/portfolio/mas/18.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Disney Clone</h6>
                <span>
                  <a href="#0">React</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/09.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>UX design</h6>
                <span>
                  <a href="#0">figma</a>,<a href="#0">Illustrator</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/12.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Device</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/14.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Image Manipulation</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://webclone-youtube.netlify.app/">
                  <a>
                    <img src="/img/portfolio/mas/11.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Youtube Clone</h6>
                <span>
                  <a href="#0">React</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://webclone-disney.netlify.app/">
                  <a>
                    <img src="/img/portfolio/mas/18.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Disney Clone</h6>
                <span>
                  <a href="#0">React</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/19.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Ecommerce dashboard</h6>
                <span>
                  <a href="#0">React</a>,<a href="#0">Next js</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/13.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Cosmetics</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://onscroll-animation.netlify.app/">
                  <a>
                    <img src="/img/portfolio/mas/17.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Pizza web</h6>
                <span>
                  <a href="#0">Html</a>,<a href="#0">Css</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/16.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Coloration</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://landing-page-coffee.netlify.app/">
                  <a>
                    <img src="/img/portfolio/mas/10.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Coffee</h6>
                <span>
                  <a href="#0">HTML</a>,<a href="#0">CSS</a>,<a href="#0">JS</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/15.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Forest</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/20.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Perception</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/22.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Cat</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/21.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>NAture</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/23.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>NAture</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/27.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Poster</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/24.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>social</h6>
                <span>
                  <a href="#0">Illustrator</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/25.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Poster</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/26.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Device</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/28.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Character</h6>
                <span>
                  <a href="#0">Adobe after Effects</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/29.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>butterfly</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/30.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Model</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/32.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Character</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/33.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Exposer</h6>
                <span>
                  <a href="#0">Photoshop</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/31.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/34.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/35.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/36.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/37.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/38.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/39.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/40.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="#0">
                  <a>
                    <img src="/img/portfolio/mas/41.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Modelling</h6>
                <span>
                  <a href="#0">Blender</a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
