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

  var CheckCircleStylizedIcon = function CheckCircleStylizedIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check-circle-stylized" },
      React.createElement(
        "title",
        { id: "title" },
        "check-circle-stylized icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { d: "M14.06 2.65A.759.759 0 0 0 13 2.476a17.518 17.518 0 0 0-5.025 5.937l-1.8-2.128a.758.758 0 0 0-1.158.979l2.554 3.021c.007.008.016.01.023.018a.749.749 0 0 0 .167.127.751.751 0 0 0 .091.06l.013.008a.754.754 0 0 0 .285.056h.006a.846.846 0 0 0 .45-.159c.011-.008.023-.011.034-.019s.017-.026.029-.037a1.079 1.079 0 0 0 .165-.225c.005-.011.014-.02.019-.031a16.561 16.561 0 0 1 5.033-6.374.758.758 0 0 0 .174-1.059z", role: "presentation" }),
        React.createElement("path", { d: "M15.321 5.764a.758.758 0 1 0-1.449.445A6.11 6.11 0 1 1 10.218 2.3a.758.758 0 1 0 .544-1.419 7.625 7.625 0 1 0 4.559 4.883z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CheckCircleStylizedIcon;
  } else {
    global.CheckCircleStylizedIcon = CheckCircleStylizedIcon;
  }
})(undefined);