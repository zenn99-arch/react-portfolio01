"use strict";
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 2455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gw": () => (/* binding */ delay),
/* harmony export */   "Ji": () => (/* binding */ fadeIn),
/* harmony export */   "U6": () => (/* binding */ fadeOut),
/* harmony export */   "m7": () => (/* binding */ getSiblings),
/* harmony export */   "mM": () => (/* binding */ animateEl)
/* harmony export */ });
var opacity = 0;
var intervalID = 0;
function show(el) {
    opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 1;
        el.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}
function hide(el) {
    opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
    if (opacity > 0) {
        opacity = 0;
        el.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}
const delay = (time, callback)=>{
    setTimeout(function() {
        callback;
    }, time);
};
const fadeIn = (el, time)=>{
    setInterval(show(el), time);
};
const fadeOut = (el, time)=>{
    setInterval(hide(el), time);
};
const getSiblings = (e)=>{
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
const animateEl = (el, to)=>{
    function draw() {
        el.style.left = to;
    }
    draw();
};


/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png","QP":true}');

/***/ })

};
;