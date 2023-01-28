"use strict";
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 4848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/navbar.js

const handleDropdown = (e)=>{
    (0,customFunctions/* getSiblings */.m7)(e.target.parentElement).filter((item)=>item.classList.contains("show")
    ).map((item)=>{
        item.classList.remove("show");
        if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
            item.childNodes[1].classList.remove("show");
        }
    });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = (e)=>{
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};
const handleSearch = ()=>{
    let searchForm = document.querySelector(".navbar .search .search-form");
    document.querySelector(".navbar .search .icon").addEventListener("click", function() {
        searchForm.style.display = "block";
        fadeIn(searchForm, 200);
    });
    document.querySelector(".navbar .search .search-form .close").addEventListener("click", function() {
        searchForm.style.display = "none";
        fadeOut(searchForm, 200);
    });
};

;// CONCATENATED MODULE: ./src/components/Navbar/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const Navbar = ({ lr , nr , theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: nr,
        className: `navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "logo",
                        children: theme ? theme === "themeL" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* darkLogo */.Q1}`,
                            alt: "logo",
                            style: {
                                height: '30px'
                            }
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* lightLogo */.E8}`,
                            alt: "logo",
                            style: {
                                height: '30px'
                            }
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* lightLogo */.E8}`,
                            alt: "logo",
                            style: {
                                height: '30px',
                                width: '200px'
                            }
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    onClick: handleMobileDropdown,
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav ml-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "nav-item dropdown",
                                onClick: handleDropdown,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/home",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Developer Studio"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/home/home3-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Creative Studio"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "nav-item dropdown",
                                onClick: handleDropdown,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Showcases"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/showcase/showcase-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Blender art"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/showcase2/showcase2-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Illustrations"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/showcase3/showcase3-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "logo"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/showcase5/showcase5-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "websites"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/works2/works2-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "portfolio"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/about/about-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "About"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/contact/contact-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Contact"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;