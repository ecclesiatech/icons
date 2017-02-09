"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LocationOutlineIcon = function LocationOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-location-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "location-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.209.008C4.78.008 2 2.488 2 5.548c0 .066 0 .132.005.2a5.009 5.009 0 0 0 .355 1.664c1.041 3.053 4.057 6.837 5.3 8.318a.732.732 0 0 0 1.093 0c1.244-1.481 4.26-5.264 5.3-8.317a5 5 0 0 0 .355-1.664c0-.067.006-.134.006-.2.003-3.061-2.776-5.541-6.205-5.541zM12.6 5.965a3.735 3.735 0 0 1-.248 1.2l-.008.02-.007.021A26.459 26.459 0 0 1 8.209 14 26.463 26.463 0 0 1 4.08 7.21l-.007-.02-.008-.02a3.755 3.755 0 0 1-.248-1.213V5.82a4.233 4.233 0 0 1 4.4-4.039 4.566 4.566 0 0 1 3.119 1.193A3.854 3.854 0 0 1 12.6 5.82v.145zM8.209 4.553a1.34 1.34 0 0 0-1.4 1.267 1.34 1.34 0 0 0 1.4 1.267 1.34 1.34 0 0 0 1.4-1.267 1.34 1.34 0 0 0-1.4-1.267z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = LocationOutlineIcon;
  } else {
    global.LocationOutlineIcon = LocationOutlineIcon;
  }
})(undefined);