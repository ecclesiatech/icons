(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ListOutline = function ListOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-list-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "list-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M14,.87H2a.87.87,0,0,0-.85.89V14.24a.87.87,0,0,0,.85.89H14a.87.87,0,0,0,.85-.89V1.76A.87.87,0,0,0,14,.87Zm-.85,12.47H2.89V2.65H13.11Z", role: "presentation" }),
    React.createElement(
      "g",
      { id: "Your_Icon", "data-name": "Your Icon" },
      React.createElement("path", { d: "M11.19,5.71H7.79a.58.58,0,0,1,0-1.15h3.4a.58.58,0,0,1,0,1.15Z", role: "presentation" }),
      React.createElement("path", { d: "M5.65,5.89H4.81a.56.56,0,0,1-.55-.58V4.93a.56.56,0,0,1,.55-.58h.84a.56.56,0,0,1,.55.58v.38A.56.56,0,0,1,5.65,5.89Z", role: "presentation" }),
      React.createElement("path", { d: "M11.19,8.58H7.79a.58.58,0,0,1,0-1.15h3.4a.58.58,0,0,1,0,1.15Z", role: "presentation" }),
      React.createElement("path", { d: "M5.65,8.77H4.81a.56.56,0,0,1-.55-.58V7.81a.56.56,0,0,1,.55-.58h.84a.56.56,0,0,1,.55.58v.38A.56.56,0,0,1,5.65,8.77Z", role: "presentation" }),
      React.createElement("path", { d: "M11.19,11.46H7.79a.58.58,0,0,1,0-1.15h3.4a.58.58,0,0,1,0,1.15Z", role: "presentation" }),
      React.createElement("path", { d: "M5.65,11.65H4.81a.56.56,0,0,1-.55-.58v-.38a.56.56,0,0,1,.55-.58h.84a.56.56,0,0,1,.55.58v.38A.56.56,0,0,1,5.65,11.65Z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ListOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ListOutline = ListOutline;
  }
})(this)