(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InfoOutline = function InfoOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-info-outline", role: "img", className: "symbol symbol-info-outline" },
  React.createElement(
    "title",
    { id: "title-info-outline" },
    "info-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M6.074 6.272h2.272a.654.654 0 0 1 .649.735l-.757 3.95a.527.527 0 0 0 .692.565l.6-.242a.223.223 0 0 1 .139.389 2.735 2.735 0 0 1-2.176.854c-1.854-.079-1.393-1.835-1.324-2.257s.451-2.512.471-2.689.206-.51-.314-.647-.687-.246-.687-.363.102-.295.435-.295z", role: "presentation" }),
    React.createElement("circle", { cx: "8.209", cy: "4.543", r: "1.261" }),
    React.createElement("path", { d: "M8 1.249A6.751 6.751 0 1 1 1.249 8 6.758 6.758 0 0 1 8 1.249m0-1.13A7.881 7.881 0 1 0 15.881 8 7.882 7.882 0 0 0 8 .119z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InfoOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.InfoOutline = InfoOutline;
  }
})(this)
