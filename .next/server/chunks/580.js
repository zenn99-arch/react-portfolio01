"use strict";
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/heroSkillsProgress.js
const heroSkillsProgress = ()=>{
    if (document.querySelector(".hero-sec .skills-box")) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (document.querySelector(".hero-sec")) {
                    if (window.pageYOffset > document.querySelector(".hero-sec").offsetTop - 800) {
                        item.style.width = myVal;
                    }
                }
            });
        });
    }
};
/* harmony default export */ const common_heroSkillsProgress = (heroSkillsProgress);

// EXTERNAL MODULE: ./src/components/Split/index.jsx
var components_Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/components/About-with-skills/index.jsx




const AboutWithSkills = ()=>{
    external_react_default().useEffect(()=>{
        common_heroSkillsProgress();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero-sec section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "About Me"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "main-title wow",
                                        "data-splitting": true,
                                        children: "My mission is design develop the best Websites around."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: "Hello! I’m Bimal Ray. Web designer from Odisha, Indian. I have rich experience in creating aesthetic website design and building. I love to talk with you about our unique ideas."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/Bimal.Ray1.pdf",
                                    className: "simple-btn mt-40",
                                    children: "Download C.V"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "skills-box full-width",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Html, Css & Java Script"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                style: {
                                                    backgroundColor: '#e2bc7b'
                                                },
                                                "data-value": "90%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: " Mern Stack Development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                style: {
                                                    backgroundColor: '#e2bc7b'
                                                },
                                                "data-value": "80%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Python, Data Science & OpenCv"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                style: {
                                                    backgroundColor: '#e2bc7b'
                                                },
                                                "data-value": "88%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Adobe Xd, Figma (Ux)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                style: {
                                                    backgroundColor: '#e2bc7b'
                                                },
                                                "data-value": "75%"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About_with_skills = (AboutWithSkills);

// EXTERNAL MODULE: ./src/components/Footer/index.jsx
var Footer = __webpack_require__(1690);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Intro-txt/index.jsx



const IntroTxt = ({ subBG  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`,
        style: {
            backgroundImage: "url(/img/slid/freelancer.png)"
        },
        "data-overlay-dark": "0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "cont",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                style: {
                                    color: 'white'
                                },
                                children: "Hello, I'm"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Bimal Ray"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Web Devloper "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "https://github.com/zenn99-arch",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-github"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "https://dribbble.com/Bimalray99",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-dribbble"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "https://www.instagram.com/creative___process/",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-instagram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-behance"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/home/home3-dark",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "simple-btn mt-40",
                                    children: "Creative studio"
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const Intro_txt = (IntroTxt);

// EXTERNAL MODULE: ./src/components/Navbar/index.jsx + 1 modules
var Navbar = __webpack_require__(4848);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/data/sections/numbers1.json
const numbers1_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","txt":"Happy Clients","value":"120"},{"id":2,"icon":"pe-7s-portfolio","txt":"Compleate Projects","value":"33"},{"id":3,"icon":"pe-7s-cloud-download","txt":"Files Downloaded","value":"4"},{"id":4,"icon":"pe-7s-medal","txt":"Renders","value":"46"}]');
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Numbers/index.jsx






const Numbers1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "number-sec section-padding sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: numbers1_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `item ${item.id == 1 ? "no-bord" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `icon ${item.icon}`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "custom-font",
                                    children: [
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            redraw: true,
                                            end: item.value,
                                            duration: "3",
                                            children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                                    onChange: start,
                                                    delayedCall: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "count",
                                                                ref: countUpRef
                                                            }),
                                                            " ",
                                                            item.id == 3 ? "K" : ""
                                                        ]
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: item.txt
                                    })
                                })
                            ]
                        })
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const Numbers = (Numbers1);

// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(8063);
;// CONCATENATED MODULE: ./src/data/sections/portfolio1.json
const portfolio1_namespaceObject = JSON.parse('[{"id":1,"image":"/img/portfolio/mas/01.png","title":"Proflo-u Device ","tags":["Blender","Solid Works"],"filterCategory":["brand"],"href":"home/home3-dark/"},{"id":2,"image":"/img/portfolio/mas/02.png","title":"CRED Webclone","tags":["React"],"filterCategory":["web"],"href":"https://cred-webclone.netlify.app"},{"id":3,"image":"/img/portfolio/mas/04.png","title":"Energies of power","tags":["Photoshop"],"filterCategory":["graphic"],"href":"home/home3-dark/"},{"id":4,"image":"/img/portfolio/mas/03.png","title":"PROFLO-U","tags":["React","GSAP"],"filterCategory":["web"],"href":"https://proflou.com/"},{"id":5,"image":"/img/portfolio/mas/05.png","title":"3D printer","tags":["Blender","Solid Works"],"filterCategory":["brand"],"href":"home/home3-dark/"},{"id":6,"image":"/img/portfolio/mas/06.png","title":"See It Yourself","tags":["React","Framer Motion"],"filterCategory":["web"],"href":"https://react-pagetransition-framermotion.netlify.app/"},{"id":7,"image":"/img/portfolio/mas/07.png","title":"Blast From The Past","tags":["Blender"],"filterCategory":["brand"],"href":"home/home3-dark/"},{"id":8,"image":"/img/portfolio/mas/08.png","title":"Brochure","tags":["Photoshop","Illustrator"],"filterCategory":["graphic"],"href":"home/home3-dark/"},{"id":9,"image":"/img/portfolio/mas/09.png","title":"UX design","tags":["figma","Illustrator"],"filterCategory":["web"],"href":"home/home3-dark/"},{"id":10,"image":"/img/portfolio/mas/11.png","title":"Youtube Clone","tags":["React"],"filterCategory":["web"],"href":"https://webclone-youtube.netlify.app/"},{"id":11,"image":"/img/portfolio/mas/12.png","title":"Device","tags":["Blender"],"filterCategory":["brand"],"href":"home/home3-dark/"},{"id":12,"image":"/img/portfolio/mas/14.png","title":"Image Manipulation","tags":["Photoshop"],"filterCategory":["graphic"],"href":"home/home3-dark/"},{"id":13,"image":"/img/portfolio/mas/18.png","title":"Disney Clone","tags":["React"],"filterCategory":["web"],"href":"https://webclone-disney.netlify.app/"},{"id":14,"image":"/img/portfolio/mas/19.png","title":"Ecommerce dashboard","tags":["React","Nextjs"],"filterCategory":["web"],"href":"home/home3-dark/"},{"id":15,"image":"/img/portfolio/mas/13.png","title":"Cosmetics","tags":["Blender"],"filterCategory":["brand"],"href":"home/home3-dark/"},{"id":16,"image":"/img/portfolio/mas/17.png","title":"Pizza web","tags":["HTML","CSS"],"filterCategory":["web"],"href":"https://onscroll-animation.netlify.app/"},{"id":17,"image":"/img/portfolio/mas/16.png","title":"Coloration","tags":["Photoshop"],"filterCategory":["graphic"],"href":"home/home3-dark/"},{"id":18,"image":"/img/portfolio/mas/10.png","title":"Coffee","tags":["HTML","CSS","JS"],"filterCategory":["web"],"href":"https://landing-page-coffee.netlify.app/"}]');
;// CONCATENATED MODULE: ./src/components/Portfolio-custom-column/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const PortfolioCustomColumn = ({ column , filterPosition , hideFilter , hideSectionTitle ,  })=>{
    const [pageLoaded, setPageLoaded] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,initIsotope/* default */.Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "portfolio section-padding pb-70",
        children: [
            !hideSectionTitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sec-head custom-font",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "wow fadeIn",
                            "data-wow-delay": ".5s",
                            children: "Portfolio"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Split/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "wow words chars splitting",
                                "data-splitting": true,
                                children: "My Works."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "tbg text-right",
                            children: "Portfolio"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${column === 3 ? "container-fluid" : "container"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        !hideFilter && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "filter",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": "*",
                                        className: "active",
                                        children: "All"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".graphic",
                                        children: "Graphics"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".web",
                                        children: "Web Page"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".brand",
                                        children: "3D "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "gallery full-width",
                            children: portfolio1_namespaceObject.map((item, index1)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${column === 3 ? "col-lg-4 col-md-6" : column === 2 ? "col-md-6" : "col-12"} items ${item.filterCategory} wow fadeInUp ${item.id === 2 && column == 3 ? "lg-mr" : item.id === 1 && column == 2 ? "lg-mr" : ""}`,
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                target: "_blank",
                                                href: item.href,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "imago wow",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.image,
                                                            alt: "image"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "item-img-overlay"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: item.tags.map((tag, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/works4/works4-dark",
                                                                    children: tag
                                                                }),
                                                                index == item.tags.length - 1 ? "" : ","
                                                            ]
                                                        }, index * 3)
                                                    )
                                                })
                                            ]
                                        })
                                    ]
                                }, item.id)
                            )
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Portfolio_custom_column = (PortfolioCustomColumn);

;// CONCATENATED MODULE: ./src/data/sections/services4.json
const services4_namespaceObject = JSON.parse('[{"id":1,"title":"Web Development","icon":"pe-7s-airplay","content":"Creating aesthtic looking websites and dashboard using MERN stack."},{"id":3,"title":"UX Design","icon":"pe-7s-config","content":"Creating client based ux accompanied by ui using figma and Adobe suite."},{"id":2,"title":"3D Design","icon":"pe-7s-box2","content":"Creating aesthetic 3D elements for Three JS using Blender which can be used in websites."}]');
;// CONCATENATED MODULE: ./src/components/Services4/index.jsx




const Services4 = ({ withBG , withPadding , halfBG , withOutTitle  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `services ${withPadding ? "section-padding" : ""} ${withBG ? "sub-bg" : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    !withOutTitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "Best Features"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Services."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "tbg",
                                children: "Services"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: services4_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `item ${index != services4_namespaceObject.length - 1 ? "md-mb50" : ""} wow fadeInUp`,
                                    "data-wow-delay": item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `icon ${item.icon}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: item.content
                                        })
                                    ]
                                })
                            }, item.id)
                        )
                    })
                ]
            }),
            halfBG && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "half-bg bottom"
            })
        ]
    }));
};
/* harmony default export */ const components_Services4 = (Services4);

// EXTERNAL MODULE: ./src/components/Testimonials1/index.jsx
var Testimonials1 = __webpack_require__(2233);
;// CONCATENATED MODULE: ./src/components/Blogs-three-column2/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const BlogsThreeColumn2 = ({ subBG  })=>{
    return(/*#__PURE__*/ _jsx("section", {
        className: `blog-grid section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "sec-head custom-font text-center",
                    children: [
                        /*#__PURE__*/ _jsx("h6", {
                            className: "wow fadeIn",
                            "data-wow-delay": ".5s",
                            children: "Latest News"
                        }),
                        /*#__PURE__*/ _jsx(Split, {
                            children: /*#__PURE__*/ _jsx("h3", {
                                className: "wow words chars splitting",
                                "data-splitting": true,
                                children: "Our Blogs."
                            })
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            className: "tbg",
                            children: "Blogs"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "item list md-mb50 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "/img/blog/1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog/blog-dark",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: "date custom-font",
                                                    children: /*#__PURE__*/ _jsxs("span", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("i", {
                                                                children: "06"
                                                            }),
                                                            " August"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "info custom-font",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "#0",
                                                        className: "author",
                                                        children: /*#__PURE__*/ _jsx("span", {
                                                            children: "by / Admin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: "/blog/blog-dark",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("h6", {
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "btn-more custom-font",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "item list md-mb50 wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "/img/blog/2.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog/blog-dark",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: "date custom-font",
                                                    children: /*#__PURE__*/ _jsxs("span", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("i", {
                                                                children: "07"
                                                            }),
                                                            " August"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "info custom-font",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "#0",
                                                        className: "author",
                                                        children: /*#__PURE__*/ _jsx("span", {
                                                            children: "by / Admin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: "/blog/blog-dark",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("h6", {
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "btn-more custom-font",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "item list wow fadeInUp",
                                "data-wow-delay": ".8s",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "/img/blog/3.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog/blog-dark",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: "date custom-font",
                                                    children: /*#__PURE__*/ _jsxs("span", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("i", {
                                                                children: "08"
                                                            }),
                                                            " August"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "info custom-font",
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "#0",
                                                        className: "author",
                                                        children: /*#__PURE__*/ _jsx("span", {
                                                            children: "by / Admin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: "/blog/blog-dark",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("h6", {
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "btn-more custom-font",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Blogs_three_column2 = ((/* unused pure expression or super */ null && (BlogsThreeColumn2)));

// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(2532);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/components/Contact-section/index.jsx





const ContactSection = ()=>{
    const messageRef = external_react_default().useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "contact-sec section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sec-head custom-font text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "wow fadeIn",
                            "data-wow-delay": ".5s",
                            children: "Get In Touch"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Split/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "wow words chars splitting",
                                "data-splitting": true,
                                children: "Contact Us."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "tbg",
                            children: "Contact"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form wow fadeInUp",
                            "data-wow-delay": ".5s",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                                initialValues: {
                                    name: "",
                                    email: "",
                                    message: ""
                                },
                                onSubmit: async (values)=>{
                                    await sendMessage(500);
                                    // alert(JSON.stringify(values, null, 2));
                                    // show message
                                    const formData = new FormData();
                                    formData.append('name', values.name);
                                    formData.append('email', values.email);
                                    formData.append('message', values.message);
                                    const res = await external_axios_default().post('/contact.php', formData);
                                    if (!res) return;
                                    messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
                                    // Reset the values
                                    values.name = "";
                                    values.email = "";
                                    values.message = "";
                                    // clear message
                                    setTimeout(()=>{
                                        messageRef.current.innerText = "";
                                    }, 2000);
                                },
                                children: ({ errors , touched  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                                        id: "contact-form",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "messages",
                                                ref: messageRef
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "controls",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                    id: "form_name",
                                                                    type: "text",
                                                                    name: "name",
                                                                    placeholder: "Name",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                        id: "form_email",
                                                                        type: "email",
                                                                        name: "email",
                                                                        validate: validateEmail,
                                                                        placeholder: "Email",
                                                                        required: "required"
                                                                    }),
                                                                    errors.email && touched.email && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        children: errors.email
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                    as: "textarea",
                                                                    id: "form_message",
                                                                    name: "message",
                                                                    placeholder: "Message",
                                                                    rows: "4",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    type: "submit",
                                                                    className: "simple-btn custom-font cursor-pointer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Send Message"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Contact_section = (ContactSection);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/data/sections/clients-brands.json
const clients_brands_namespaceObject = JSON.parse('[{"id":1,"darkImage":"/img/clients/brands/dark/01.png","lightImage":"/img/clients/brands/light/1.png","name":"Three-js"},{"id":2,"darkImage":"/img/clients/brands/dark/02.png","lightImage":"/img/clients/brands/light/2.png","name":"Tailwind css"},{"id":3,"darkImage":"/img/clients/brands/dark/03.png","lightImage":"/img/clients/brands/light/3.png","name":"React js"},{"id":4,"darkImage":"/img/clients/brands/dark/04.png","lightImage":"/img/clients/brands/light/4.png","name":"Blender"},{"id":5,"darkImage":"/img/clients/brands/dark/05.png","lightImage":"/img/clients/brands/light/5.png","name":"Framer Motion"},{"id":6,"darkImage":"/img/clients/brands/dark/06.png","lightImage":"/img/clients/brands/light/6.png","name":"Next js"},{"id":7,"darkImage":"/img/clients/brands/dark/07.png","lightImage":"/img/clients/brands/light/7.png","name":"GSAP"},{"id":8,"darkImage":"/img/clients/brands/dark/08.png","lightImage":"/img/clients/brands/light/8.png","name":"Adobe Suite"}]');
;// CONCATENATED MODULE: ./src/components/Clients-brands/index.jsx

/* eslint-disable @next/next/no-img-element */ 





const ClientsBrands = ({ subBG , theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients-brand section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                className: "",
                "data-wow-delay": ".5s",
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
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }, 
                ],
                children: clients_brands_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "brands",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    display: "none"
                                },
                                children: " \xa0 "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item",
                                "data-wow-delay": index + 1 == "1" ? ".1s" : index + 1 == "2" ? ".2s" : index + 1 == "3" ? ".4s" : index + 1 == "4" ? ".1s" : index + 1 == "5" ? ".3s" : index + 1 == "6" ? ".5s" : index + 1 == "7" ? ".2s" : index + 1 == "8" ? ".3s" : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: item.darkImage,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Split/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: "https://reactjs.org/",
                                            className: "link words chars splitting",
                                            "data-splitting": true,
                                            children: item.name
                                        })
                                    })
                                ]
                            })
                        ]
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const Clients_brands = (ClientsBrands);

;// CONCATENATED MODULE: ./src/pages/home/index.jsx














const Homepage2 = ()=>{
    const navbarRef = external_react_default().useRef(null);
    const logoRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Intro_txt, {
                subBG: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About_with_skills, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Services4, {
                halfBG: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Numbers, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Portfolio_custom_column, {
                column: 2,
                filterPosition: "left"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Clients_brands, {
                subBG: true,
                theme: "dark"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact_section, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
            })
        ]
    }));
};
/* harmony default export */ const home = (Homepage2);


/***/ })

};
;