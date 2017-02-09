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

  var MusicStandIcon = function MusicStandIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-music stand" },
      React.createElement(
        "title",
        { id: "title" },
        "music stand icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M11.844 4.568c0-.333-.183-.421-.432-.354-.989.266-4.332 1.1-5.33 1.418a.458.458 0 0 0-.376.47v3.989a1.69 1.69 0 0 0-.674-.111 1.587 1.587 0 0 0-.541.1 1.871 1.871 0 0 0-.49.257 1.281 1.281 0 0 0-.363.365.982.982 0 0 0-.154.48.794.794 0 0 0 .058.3.807.807 0 0 0 .128.224.97.97 0 0 0 .426.311 1.973 1.973 0 0 0 .6.091 2.677 2.677 0 0 0 1.017-.208 2.688 2.688 0 0 0 .9-.578 1.04 1.04 0 0 0 .245-.464 4.174 4.174 0 0 0 .034-.611V7.239l3.754-1.066v2.88a1.293 1.293 0 0 0-.58-.138 1.622 1.622 0 0 0-.541.1 1.848 1.848 0 0 0-.489.257 1.319 1.319 0 0 0-.35.39.951.951 0 0 0-.134.481.866.866 0 0 0 .186.527.966.966 0 0 0 .425.311 1.77 1.77 0 0 0 .568.091 2.533 2.533 0 0 0 1-.212 2.125 2.125 0 0 0 .768-.578 1.172 1.172 0 0 0 .3-.465 4.318 4.318 0 0 0 .05-.637s-.005-3.371-.005-4.612z", role: "presentation" }),
        React.createElement("path", { "class": "cls-2", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 14H2V2h3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h3z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = MusicStandIcon;
  } else {
    global.MusicStandIcon = MusicStandIcon;
  }
})(undefined);