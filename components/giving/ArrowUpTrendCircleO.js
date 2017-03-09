(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ArrowUpTrendCircleO = function ArrowUpTrendCircleO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrow-up-trend-circle-o" },
  React.createElement(
    "title",
    { id: "title" },
    "arrow-up-trend-circle-o icon"
  ),
  React.createElement("path", { d: "M8.048.533a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5zm0 13.393a5.89 5.89 0 0 1-4.909-2.64l2.932-2.932 2.519 2.519 2.3-2.3v.868h1.5V5.978H8.846v1.5h1.017L8.589 8.751 6.071 6.232 2.447 9.856a5.891 5.891 0 1 1 5.6 4.07z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ArrowUpTrendCircleO;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.ArrowUpTrendCircleO = ArrowUpTrendCircleO;
  }
})(this)