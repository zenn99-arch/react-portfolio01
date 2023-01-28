"use strict";
exports.id = 233;
exports.ids = [233];
exports.modules = {

/***/ 2233:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable @next/next/no-img-element */ 






class Testimonials1 extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return(/*#__PURE__*/ _jsxs("div", {
            className: "arrows",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    onClick: ()=>this.slider.slickNext()
                    ,
                    className: "next cursor-pointer",
                    children: /*#__PURE__*/ _jsx("span", {
                        className: "pe-7s-angle-right"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    onClick: ()=>this.slider.slickPrev()
                    ,
                    className: "prev cursor-pointer",
                    children: /*#__PURE__*/ _jsx("span", {
                        className: "pe-7s-angle-left"
                    })
                })
            ]
        }));
    };
    componentDidMount() {
        removeOverlay();
        parallaxie('.testimonials.bg-img.parallaxie');
    }
    render() {
        return(/*#__PURE__*/ _jsx("section", {
            className: `testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`,
            style: {
                backgroundImage: `${this.props.withBG && !this.props.imgSrc ? "url(/img/slid/3.jpg)" : this.props.imgSrc ? `url(${this.props.imgSrc})` : "none"}`
            },
            "data-overlay-dark": `${this.props.overlay ? "9" : "0"}`,
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container position-re",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "What Peapole Says?"
                            }),
                            /*#__PURE__*/ _jsx(Split, {
                                children: /*#__PURE__*/ _jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Testimonials."
                                })
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                className: "tbg",
                                children: "Testimonials"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row justify-content-center wow fadeInUp",
                        "data-wow-delay": ".5s",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ _jsxs(Slider, {
                                className: "slic-item",
                                ref: (c)=>this.slider = c
                                ,
                                dots: true,
                                infinite: true,
                                arrows: true,
                                autoplay: true,
                                rows: 1,
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "Working with creative-process digital agency to support our organic and paid social media activity has extended the marketing activities we are able to achieve platform has made collaboration easy."
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ _jsxs(_Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ _jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "creative-process started out managing our SEO efforts, but their scientific approach to digital marketing and the results they have achieved made it an easy decision for us to handover the management."
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ _jsxs(_Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ _jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "I would highly recommend creative-process Digital. I worked with the team on an animation for our U+2018 Click & Collect U+2019 service. This team is different from any other agency I have worked with in the past."
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ _jsxs(_Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ _jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    this.renderArrows()
                ]
            })
        }));
    }
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonials1)));


/***/ })

};
;