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

  var DepositIcon = function DepositIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-deposit" },
      React.createElement(
        "title",
        { id: "title" },
        "deposit icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M1.633 11.454h12.542v1.266H1.633zm.458-5.5h1.266v4.933H2.091zM9.884 8.42a1.979 1.979 0 1 0-1.979 1.98 1.981 1.981 0 0 0 1.979-1.98zm-1.309 0a.67.67 0 1 1-.67-.67.671.671 0 0 1 .67.67zM3.924 5.954h1.267v4.933H3.924zm8.518-.008h1.267v4.933h-1.267zM.397 13.287h15.015v1.266H.397zm10.212-7.341h1.267v4.933h-1.267zm5.079-.883L7.979.35a.173.173 0 0 0-.183 0L.121 5.063a.175.175 0 0 0 .092.324H15.6a.175.175 0 0 0 .091-.324zM3.855 4.121l4.034-2.277 4.033 2.277z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = DepositIcon;
  } else {
    global.DepositIcon = DepositIcon;
  }
})(undefined);