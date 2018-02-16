(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PieChartO = function PieChartO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-pie-chart-o", role: "img", className: "symbol symbol-pie-chart-o" },
  React.createElement(
    "title",
    { id: "title-pie-chart-o" },
    "pie-chart-o icon"
  ),
  React.createElement("path", { d: "M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm6.215 4.792L8.5 7.242V1.025a7 7 0 0 1 5.715 3.767zM1 8a7.005 7.005 0 0 1 6.5-6.975v7.617l-.009.006.009.013v.1l.054-.023 3.891 5.351A6.989 6.989 0 0 1 1 8zm11.276 5.53L8.5 8.331l6.112-2.619a6.949 6.949 0 0 1-2.332 7.818z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PieChartO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PieChartO = PieChartO;
  }
})(this)
