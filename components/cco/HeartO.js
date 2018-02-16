(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HeartO = function HeartO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-heart-o", role: "img", className: "symbol symbol-heart-o" },
  React.createElement(
    "title",
    { id: "title-heart-o" },
    "heart-o icon"
  ),
  React.createElement("path", { d: "M8.012 14.812a.713.713 0 0 1-.507-.211L1.363 8.409A4.266 4.266 0 0 1 .136 5.194a4.22 4.22 0 0 1 1.55-3.083 4.051 4.051 0 0 1 2.574-.9A4.6 4.6 0 0 1 7.5 2.574l.514.518.514-.518a4.363 4.363 0 0 1 5.812-.463 4.227 4.227 0 0 1 1.551 3.083 4.281 4.281 0 0 1-1.227 3.215L8.52 14.6a.717.717 0 0 1-.508.212zM4.26 2.208a3 3 0 0 0-1.938.674 3.27 3.27 0 0 0-.248 4.823l5.939 5.987 5.938-5.987a3.274 3.274 0 0 0 .94-2.462A3.237 3.237 0 0 0 13.7 2.882a3.36 3.36 0 0 0-4.466.4l-1.222 1.23-1.224-1.234a3.6 3.6 0 0 0-2.528-1.07z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HeartO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.HeartO = HeartO;
  }
})(this)
