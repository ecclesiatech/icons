(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonOutline = function PersonOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-person-outline", role: "img", className: "symbol symbol-person-outline" },
  React.createElement(
    "title",
    { id: "title-person-outline" },
    "person-outline icon"
  ),
  React.createElement("path", { d: "M11.65 15.837h-7a2.675 2.675 0 0 1-2.626-2.715v-.9a.907.907 0 0 1 .489-.812l2.743-1.4-.5-.987a.942.942 0 0 1-.1-.424V4.978a3.566 3.566 0 0 1 3.5-3.62 3.566 3.566 0 0 1 3.5 3.62V8.6a.93.93 0 0 1-.1.424l-.505.987 2.744 1.4a.908.908 0 0 1 .488.812v.9a2.674 2.674 0 0 1-2.633 2.714zM3.773 12.78v.342a.892.892 0 0 0 .876.9h7a.892.892 0 0 0 .875-.9v-.342l-3.063-1.562a.892.892 0 0 1-.445-.533.93.93 0 0 1 .059-.7L9.9 8.371V4.978a1.751 1.751 0 1 0-3.5 0v3.393l.825 1.612a.934.934 0 0 1 .058.7.892.892 0 0 1-.445.533z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PersonOutline = PersonOutline;
  }
})(this)
