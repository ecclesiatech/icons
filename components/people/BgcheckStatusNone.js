(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BgcheckStatusNone = function BgcheckStatusNone() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bgcheck-status-none", role: "img", className: "symbol symbol-bgcheck-status-none" },
  React.createElement(
    "title",
    { id: "title-bgcheck-status-none" },
    "bgcheck-status-none icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "data-name": "Subtraction 8", className: "cls-1", d: "M8.04 15.825a1.7 1.7 0 0 1-.946-.3l-4.578-3.509a5.47 5.47 0 0 1-2.09-4.309V3a.506.506 0 0 1 .4-.5L7.493.29a1.688 1.688 0 0 1 .995 0l6.768 2.21a1 1 0 0 1 .4.5v4.707a5.47 5.47 0 0 1-2.09 4.309l-4.58 3.508a1.7 1.7 0 0 1-.946.301zM7.955 4.077a3.508 3.508 0 1 0 3.484 3.507 3.495 3.495 0 0 0-3.484-3.507zm0 6.113a2.61 2.61 0 0 1-2.118-4.1l3.6 3.625a2.548 2.548 0 0 1-1.484.47zm2.121-1.11l-3.6-3.629a2.577 2.577 0 0 1 3.6.659 2.623 2.623 0 0 1 0 2.966z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BgcheckStatusNone;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.BgcheckStatusNone = BgcheckStatusNone;
  }
})(this)