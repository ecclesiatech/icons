(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Resources = function Resources() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-resources" },
  React.createElement(
    "title",
    { id: "title" },
    "resources icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.976 4.2l-.255-.089L8.308 1h-.893L2.163 4.112l-.271.111L0 7.586l1.861 1.16v3.979L7.749 16h.385l5.847-3.275V8.772l1.953-1.186zm-10.257.206l3.533-1.888v1.837l-1.21.03-.8.5v1.004L3.125 4.766zm3.558 10.163l-4.063-2.4V9.351l3.256 1.861.806-1.283zM6.07 9.773L1.392 7.267l1.06-1.991 4.839 2.655zm2.536-7.23l3.582 1.876.593.3-2.15 1.17-.022-1.053L9.576 4.4l-.97-.022zm4.02 9.627l-4.063 2.4V9.851l.9 1.274 3.165-1.836zm-2.813-2.4l-1.22-1.839 4.747-2.666 1.151 2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Resources;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Resources = Resources;
  }
})(this)