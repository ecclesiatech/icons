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

  var ExternalLinkIcon = function ExternalLinkIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-external-link" },
      React.createElement(
        "title",
        { id: "title" },
        "external-link icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M11.981 7.764v5.486h-9.17v-9.4h5.271c.156 0 .037-.2.037-.2l-1.6-1.6h-4a1.512 1.512 0 0 0-1.508 1.511v9.976a1.512 1.512 0 0 0 1.513 1.513h9.745a1.512 1.512 0 0 0 1.512-1.512v-4.23l-1.64-1.64s-.16-.044-.16.096z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M14.408.95H9.131a.451.451 0 0 0-.319.77l1.829 1.83-4.435 4.436a1.1 1.1 0 0 0 1.557 1.556L12.2 5.106l2.021 2.021a.451.451 0 0 0 .77-.319V1.53a.58.58 0 0 0-.583-.58z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ExternalLinkIcon;
  } else {
    global.ExternalLinkIcon = ExternalLinkIcon;
  }
})(undefined);