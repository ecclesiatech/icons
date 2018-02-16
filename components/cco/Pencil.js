(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Pencil = function Pencil() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-pencil", role: "img", className: "symbol symbol-pencil" },
  React.createElement(
    "title",
    { id: "title-pencil" },
    "pencil icon"
  ),
  React.createElement("path", { d: "M15.362 3.453L12.575.677a1.543 1.543 0 0 0-2.125 0L.981 10.108A1.715 1.715 0 0 0 .464 11.3L.2 14.588a1.073 1.073 0 0 0 1.072 1.159h.078l3.3-.238a1.787 1.787 0 0 0 1.25-.52l9.458-9.42a1.488 1.488 0 0 0 0-2.116zM2.584 10.486l5.79-5.767L11.3 7.635 5.512 13.4zm-.749 1.23l2.427 2.418-2.634.19zM14.37 4.581L12.3 6.647 9.366 3.731l2.075-2.067a.1.1 0 0 1 .071-.025.1.1 0 0 1 .07.025L14.37 4.44z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Pencil;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Pencil = Pencil;
  }
})(this)
