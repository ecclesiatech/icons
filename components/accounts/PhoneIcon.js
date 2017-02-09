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

  var PhoneIcon = function PhoneIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-phone" },
      React.createElement(
        "title",
        { id: "title" },
        "phone icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M1.951 5.838a26.787 26.787 0 0 0 7.089 8.615l1.081.86a1.756 1.756 0 0 0 2.216-.023l1.892-1.57.308-.255a1.305 1.305 0 0 0 .173-1.832l-1.452-1.765a1.292 1.292 0 0 0-1.825-.174L9.6 11.213a26.79 26.79 0 0 1-4.378-5.32l1.83-1.519a1.305 1.305 0 0 0 .173-1.832L5.777.777A1.292 1.292 0 0 0 3.953.6l-.308.258-1.892 1.57a1.774 1.774 0 0 0-.44 2.182z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PhoneIcon;
  } else {
    global.PhoneIcon = PhoneIcon;
  }
})(undefined);