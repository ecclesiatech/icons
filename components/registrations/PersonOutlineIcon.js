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

  var PersonOutlineIcon = function PersonOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "person-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M11.65 15.837h-7a2.674 2.674 0 0 1-2.625-2.715v-.905a.908.908 0 0 1 .489-.812l2.744-1.4-.5-.987a.93.93 0 0 1-.1-.423V4.978a3.566 3.566 0 0 1 3.5-3.62 3.566 3.566 0 0 1 3.5 3.62V8.6a.93.93 0 0 1-.1.423l-.505.987 2.744 1.4a.908.908 0 0 1 .488.812v.905a2.674 2.674 0 0 1-2.635 2.71zM3.773 12.78v.342a.892.892 0 0 0 .875.905h7a.892.892 0 0 0 .875-.905v-.342l-3.062-1.562a.9.9 0 0 1-.446-.533.931.931 0 0 1 .059-.7L9.9 8.371V4.978a1.751 1.751 0 1 0-3.5 0v3.393l.825 1.612a.932.932 0 0 1 .059.7.9.9 0 0 1-.446.533z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PersonOutlineIcon;
  } else {
    global.PersonOutlineIcon = PersonOutlineIcon;
  }
})(undefined);