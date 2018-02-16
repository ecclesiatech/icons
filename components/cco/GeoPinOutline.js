(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GeoPinOutline = function GeoPinOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-geo-pin-outline", role: "img", className: "symbol symbol-geo-pin-outline" },
  React.createElement(
    "title",
    { id: "title-geo-pin-outline" },
    "geo-pin-outline icon"
  ),
  React.createElement("path", { d: "M8 .028a5.849 5.849 0 0 0-5.695 5.979 6.062 6.062 0 0 0 1.109 3.542l3.8 5.98a.925.925 0 0 0 1.58 0L12.556 9.6A6.137 6.137 0 0 0 13.7 6.007 5.849 5.849 0 0 0 8 .028zm3.007 8.416L8 13.18 4.962 8.4A4.081 4.081 0 0 1 4.2 6.007 3.9 3.9 0 0 1 8 2.021a3.9 3.9 0 0 1 3.8 3.986 4.146 4.146 0 0 1-.793 2.437zM7.326 5.3a1.048 1.048 0 0 0 0 1.415.928.928 0 0 0 1.348 0 1.048 1.048 0 0 0 0-1.415.961.961 0 0 0-1.348 0z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GeoPinOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.GeoPinOutline = GeoPinOutline;
  }
})(this)
