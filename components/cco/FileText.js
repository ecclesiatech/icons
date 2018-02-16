(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileText = function FileText() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-file-text", role: "img", className: "symbol symbol-file-text" },
  React.createElement(
    "title",
    { id: "title-file-text" },
    "file-text icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.146 7.212v.516a.29.29 0 0 1-.294.294.3.3 0 0 1-.295-.257h-.35v1.491a.3.3 0 0 1 .258.295.291.291 0 0 1-.295.294h-.515a.291.291 0 0 1-.295-.294.3.3 0 0 1 .258-.295V7.765h-.442a.279.279 0 0 1-.276.257.29.29 0 0 1-.295-.294v-.516a.291.291 0 0 1 .295-.294.3.3 0 0 1 .295.258h1.38a.286.286 0 0 1 .571.036zm3.673 1.137h-2.57a.425.425 0 0 1 0-.85h2.57a.425.425 0 0 1 0 .85zm0 1.478h-2.57a.425.425 0 1 1 0-.849h2.57a.425.425 0 1 1 0 .849zm0 1.48H4.976a.425.425 0 0 1 0-.85h5.843a.425.425 0 0 1 0 .85zm0 1.478H4.976a.425.425 0 1 1 0-.849h5.843a.425.425 0 1 1 0 .849z", role: "presentation" }),
    React.createElement("path", { d: "M9.845 0H2.35a.8.8 0 0 0-.805.805V15.2a.805.805 0 0 0 .805.8h11.3a.805.805 0 0 0 .8-.8V4.15zm2.564 4.155l-2.452.007a.118.118 0 0 1-.118-.119V1.849zm.7 10.5H2.9V1.35h5.6l-.012 2.691A1.468 1.468 0 0 0 9.96 5.512l3.145-.012z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileText;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FileText = FileText;
  }
})(this)
