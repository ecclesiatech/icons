(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InstagramOutline = function InstagramOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-instagram-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "instagram-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M13 .006H3A2.992 2.992 0 0 0 .01 3v10A2.993 2.993 0 0 0 3 15.986h10A2.993 2.993 0 0 0 15.99 13V3A2.992 2.992 0 0 0 13 .006zM13.954 13a.954.954 0 0 1-.954.95H3a.954.954 0 0 1-.954-.95V7.621h1.78a4.221 4.221 0 0 0-.019.375 4.193 4.193 0 1 0 8.387 0c0-.127-.008-.251-.019-.375h1.779zM5.842 8A2.158 2.158 0 1 1 8 10.154 2.158 2.158 0 0 1 5.842 8zm8.112-2.411h-2.527a4.187 4.187 0 0 0-6.855 0H2.046V3A.954.954 0 0 1 3 2.043h10a.954.954 0 0 1 .954.957z", role: "presentation" }),
    React.createElement("rect", { "class": "cls-1", x: "11.247", y: "2.816", width: "1.968", height: "1.968", rx: ".62", ry: ".62" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InstagramOutline;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.InstagramOutline = InstagramOutline;
  }
})(this)