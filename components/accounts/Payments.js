(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Payments = function Payments() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-payments" },
  React.createElement(
    "title",
    { id: "title" },
    "payments icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M0 12.712a.892.892 0 0 0 .892.893h14.2a.893.893 0 0 0 .892-.893V7.01H0zm11.541-3.571H14.3V11.9h-2.759zm3.549-6.622H.892A.892.892 0 0 0 0 3.411v1.334h15.982V3.411a.893.893 0 0 0-.892-.892z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Payments;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Payments = Payments;
  }
})(this)