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

  var ChevronLIcon = function ChevronLIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron-l" },
      React.createElement(
        "title",
        { id: "title" },
        "chevron-l icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M11.737 15.933a1.242 1.242 0 0 1-.881-.365L3.289 8 10.856.433a1.246 1.246 0 0 1 1.762 1.762L6.812 8l5.806 5.806a1.246 1.246 0 0 1-.881 2.127z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ChevronLIcon;
  } else {
    global.ChevronLIcon = ChevronLIcon;
  }
})(undefined);