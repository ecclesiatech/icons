(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormLine = function FormLine() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-line", role: "img", className: "symbol symbol-form-line" },
  React.createElement(
    "title",
    { id: "title-form-line" },
    "form-line icon"
  ),
  React.createElement("path", { d: "M11.285 1.028H2v13.944h12v-11.1zM11.03 2.64l1.472 1.4H11.03zm1.993 11.389H2.946v-12h7.079v2.987h3zm-4-8.006H5.032V7h3.989zM5.032 9.995H11V9.02H5.032z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormLine;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FormLine = FormLine;
  }
})(this)
