"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/common/parallaxie.js":
/*!**********************************!*\
  !*** ./src/common/parallaxie.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ parallaxie; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction parallaxie(selector) {\n    var elementBg = document.querySelector(selector);\n    if (elementBg) {\n        var position = elementBg.getBoundingClientRect(e).top * 0.75;\n        elementBg.style.backgroundSize = 'cover';\n        elementBg.style.backgroundRepeat = 'no-repeat';\n        elementBg.style.backgroundAttachment = 'fixed';\n        elementBg.style.backgroundPosition = \"center \".concat(position, \"px\");\n        window.addEventListener('scroll', function() {\n            var element = document.querySelector(selector);\n            position = element.getBoundingClientRect().top * 0.75;\n            element.style.backgroundPosition = \"center \".concat(position, \"px\");\n        });\n    }\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3BhcmFsbGF4aWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZSxRQUFRLENBQUNBLFVBQVUsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDNUMsR0FBRyxDQUFDQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDSCxRQUFRO0lBQy9DLEVBQUUsRUFBRUMsU0FBUyxFQUFFLENBQUM7UUFDZCxHQUFHLENBQUNHLFFBQVEsR0FBR0gsU0FBUyxDQUFDSSxxQkFBcUIsQ0FBQ0MsQ0FBQyxFQUFFQyxHQUFHLEdBQUcsSUFBSTtRQUU1RE4sU0FBUyxDQUFDTyxLQUFLLENBQUNDLGNBQWMsR0FBRyxDQUFPO1FBQ3hDUixTQUFTLENBQUNPLEtBQUssQ0FBQ0UsZ0JBQWdCLEdBQUcsQ0FBVztRQUM5Q1QsU0FBUyxDQUFDTyxLQUFLLENBQUNHLG9CQUFvQixHQUFHLENBQU87UUFDOUNWLFNBQVMsQ0FBQ08sS0FBSyxDQUFDSSxrQkFBa0IsR0FBSSxDQUFPLFNBQVcsTUFBRSxDQUFYUixRQUFRLEVBQUMsQ0FBRTtRQUUxRFMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUUsUUFBUSxHQUFGLENBQUM7WUFDdkMsR0FBRyxDQUFDQyxPQUFPLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDSCxRQUFRO1lBRTdDSSxRQUFRLEdBQUdXLE9BQU8sQ0FBQ1YscUJBQXFCLEdBQUdFLEdBQUcsR0FBRyxJQUFJO1lBQ3JEUSxPQUFPLENBQUNQLEtBQUssQ0FBQ0ksa0JBQWtCLEdBQUksQ0FBTyxTQUFXLE1BQUUsQ0FBWFIsUUFBUSxFQUFDLENBQUU7UUFDMUQsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21tb24vcGFyYWxsYXhpZS5qcz9mMDY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcmFsbGF4aWUoc2VsZWN0b3IpIHtcclxuICBsZXQgZWxlbWVudEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgaWYgKGVsZW1lbnRCZykge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gZWxlbWVudEJnLmdldEJvdW5kaW5nQ2xpZW50UmVjdChlKS50b3AgKiAwLjc1O1xyXG5cclxuICAgIGVsZW1lbnRCZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICBlbGVtZW50Qmcuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xyXG4gICAgZWxlbWVudEJnLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gJ2ZpeGVkJztcclxuICAgIGVsZW1lbnRCZy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgY2VudGVyICR7cG9zaXRpb259cHhgO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG4gICAgICBwb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICogMC43NTtcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgY2VudGVyICR7cG9zaXRpb259cHhgO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInBhcmFsbGF4aWUiLCJzZWxlY3RvciIsImVsZW1lbnRCZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZSIsInRvcCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/parallaxie.js\n");

/***/ })

});