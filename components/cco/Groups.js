(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Groups = function Groups() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-groups" },
  React.createElement(
    "title",
    { id: "title" },
    "groups icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.18,9.14V6.82A3.33,3.33,0,1,0,9.24,2.91H6.76A3.33,3.33,0,1,0,2.95,6.84V9.15A3.33,3.33,0,1,0,6.77,13H9.23a3.33,3.33,0,1,0,3.95-3.86Zm-.71-7.57a2,2,0,1,1-2,2A2,2,0,0,1,12.47,1.57Zm-11,2a2,2,0,1,1,2,2A2,2,0,0,1,1.5,3.53Zm2,10.83a2,2,0,1,1,2-2A2,2,0,0,1,3.47,14.37Zm5.77-2.6H6.75a3.33,3.33,0,0,0-2.58-2.6V6.82a3.34,3.34,0,0,0,2.6-2.67H9.22a3.33,3.33,0,0,0,2.72,2.69V9.13A3.33,3.33,0,0,0,9.23,11.77Zm3.23,2.6a2,2,0,1,1,2-2A2,2,0,0,1,12.47,14.37Z", style: "fill-rule:evenodd", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Groups;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Groups = Groups;
  }
})(this)