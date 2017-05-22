(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Dark = function Dark() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-dark" },
  React.createElement(
    "title",
    { id: "title" },
    "dark icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M4.106 4.808V3.743H5.17a.533.533 0 1 0 0-1.065H4.106V1.612a.533.533 0 0 0-1.066 0v1.065H1.975a.533.533 0 1 0 0 1.066h1.064v1.065a.533.533 0 1 0 1.066 0zm6.548.519a5.327 5.327 0 0 1-4.262 8.521 5.326 5.326 0 1 0 4.262-8.521zM6.236 8.538H5.7V8a.533.533 0 0 0-1.063 0v.533h-.531a.532.532 0 1 0 0 1.065h.531v.534a.533.533 0 0 0 1.066 0V9.6h.533a.532.532 0 0 0 0-1.065z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Dark;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Dark = Dark;
  }
})(this)
