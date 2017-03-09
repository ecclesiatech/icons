(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Plus = function Plus() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-plus" },
  React.createElement(
    "title",
    { id: "title" },
    "plus icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15 6.292a.974.974 0 0 1 .977.975v1.5a.977.977 0 0 1-.977.975H9.725V15a.959.959 0 0 1-.286.71.942.942 0 0 1-.691.29h-1.5a.977.977 0 0 1-.977-.977V9.742H1.015A.984.984 0 0 1 .3 9.466a.93.93 0 0 1-.286-.7v-1.5a.942.942 0 0 1 .286-.69.945.945 0 0 1 .691-.284h5.282V1.031a.993.993 0 0 1 .276-.712.941.941 0 0 1 .7-.286h1.5a.951.951 0 0 1 .691.286.943.943 0 0 1 .286.691v5.282z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Plus;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Plus = Plus;
  }
})(this)