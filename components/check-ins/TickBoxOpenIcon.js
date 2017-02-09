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

  var TickBoxOpenIcon = function TickBoxOpenIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-tick-box-open" },
      React.createElement(
        "title",
        { id: "title" },
        "tick-box-open icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M13.005.018H2.995A2.9 2.9 0 0 0 .018 2.907v10.1a2.977 2.977 0 0 0 2.977 2.977h10.01a2.977 2.977 0 0 0 2.977-2.977v-10.1A2.9 2.9 0 0 0 13.005.018zm1.08 13.076a.992.992 0 0 1-.992.992H2.907a.992.992 0 0 1-.992-.992V2.907a.992.992 0 0 1 .992-.992h10.186a.992.992 0 0 1 .992.992z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = TickBoxOpenIcon;
  } else {
    global.TickBoxOpenIcon = TickBoxOpenIcon;
  }
})(undefined);