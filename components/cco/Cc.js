(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Cc = function Cc() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-cc" },
  React.createElement(
    "title",
    { id: "title" },
    "cc icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("rect", { x: "5.18", y: "10.18", width: "2.05", height: "1.17" }),
    React.createElement("rect", { x: "2.5", y: "10.18", width: "2.05", height: "1.17" }),
    React.createElement("path", { d: "M12,8.29a1.52,1.52,0,0,0-1,.39A1.53,1.53,0,1,0,11,11a1.53,1.53,0,1,0,1-2.67Z", role: "presentation" }),
    React.createElement("path", { d: "M15.39,1.74H.62a.61.61,0,0,0-.54.33A.52.52,0,0,0,0,2.34v10.8H0a.58.58,0,0,0,0,.22v0h0a.61.61,0,0,0,.56.37H15.39a.61.61,0,0,0,.61-.61V2.35A.61.61,0,0,0,15.39,1.74Zm-.74,3.63H1.36V3.09H14.65Zm-13.29,7V6.87H14.65V12.4Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Cc;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Cc = Cc;
  }
})(this)