"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CropIcon = function CropIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-crop" },
      React.createElement(
        "title",
        { id: "title" },
        "crop icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15.447 11.514h-2.164V5.419a6.472 6.472 0 0 0-.4-1.954L15.467.937a.276.276 0 1 0-.391-.391l-2.588 2.529a3.524 3.524 0 0 0-1.432-.357H4.439V1.029c0-.305-.816-.553-1.122-.553s-1.075.248-1.075.553v1.689H.553C.248 2.718 0 3.487 0 3.792s.248 1.075.553 1.075h1.689v7.186A1.66 1.66 0 0 0 3.9 13.711h7.186v1.737c0 .305.769.553 1.075.553s1.122-.248 1.122-.553v-1.737h2.163c.306 0 .553-.769.553-1.075s-.247-1.122-.552-1.122zm-4.913-6.647a.539.539 0 0 1 .135.027l-6.2 6.2a.534.534 0 0 1-.027-.135v-5.54a.553.553 0 0 1 .553-.553zm-5.542 6.647a.535.535 0 0 1-.135-.027l6.2-6.2a.533.533 0 0 1 .027.135v5.542a.553.553 0 0 1-.553.553z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CropIcon;
  } else {
    global.CropIcon = CropIcon;
  }
})(undefined);