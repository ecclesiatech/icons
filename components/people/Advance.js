(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Advance = function Advance() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-advance", role: "img", className: "symbol symbol-advance" },
  React.createElement(
    "title",
    { id: "title-advance" },
    "advance icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M3.8 14.31a3.38 3.38 0 1 1 3.38-3.38 3.39 3.39 0 0 1-3.38 3.38zm0-5.76a2.38 2.38 0 1 0 2.38 2.38A2.39 2.39 0 0 0 3.8 8.55zm8.47 5.76a3.38 3.38 0 1 1 3.38-3.38 3.38 3.38 0 0 1-3.38 3.38zm1.19-12.26a.75.75 0 0 0-.54-.31.69.69 0 0 0-.75.61L12 3.72a5 5 0 0 0-3.85-2.15c-2.89 0-4.9 3.24-5 3.38a.74.74 0 0 0 .25 1 .7.7 0 0 0 .39.11.74.74 0 0 0 .64-.35s1.7-2.63 3.72-2.64a3.55 3.55 0 0 1 2.62 1.52l-1.35-.26a.7.7 0 0 0-.75.61.78.78 0 0 0 .61.84l3 .55h.08a.84.84 0 0 0 .92-.74l.35-3a.67.67 0 0 0-.17-.54z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Advance;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.Advance = Advance;
  }
})(this)