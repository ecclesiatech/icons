(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PencilUnderline = function PencilUnderline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-pencil-underline", role: "img", className: "symbol symbol-pencil-underline" },
  React.createElement(
    "title",
    { id: "title-pencil-underline" },
    "pencil-underline icon"
  ),
  React.createElement("path", { d: "M15.16 14.369H5.063l7.488-10.316a.841.841 0 0 0-.171-1.162L9.418.663a.8.8 0 0 0-.607-.156.81.81 0 0 0-.536.328L.734 11.225l-.013 3.466a.82.82 0 0 0 .324.658.772.772 0 0 0 .288.129.541.541 0 0 0 .151.031H15.16a.57.57 0 0 0 0-1.14zM1.852 11.6l7.143-9.84 2.476 1.863-7.144 9.843-2.485.787z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PencilUnderline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PencilUnderline = PencilUnderline;
  }
})(this)
