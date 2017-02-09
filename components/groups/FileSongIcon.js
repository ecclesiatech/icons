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

  var FileSongIcon = function FileSongIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-song" },
      React.createElement(
        "title",
        { id: "title" },
        "file-song icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement(
          "g",
          { "data-name": "Layer 5" },
          React.createElement("path", { "class": "cls-1", d: "M9.845.041H2.35a.8.8 0 0 0-.8.8v14.397a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8V4.191zM12.409 4.2H9.957a.118.118 0 0 1-.118-.118V1.888zm.7 10.5H2.9V1.391h5.6v2.691a1.468 1.468 0 0 0 1.46 1.471l3.14-.009z", role: "presentation" }),
          React.createElement("path", { "class": "cls-1", d: "M10.571 7.254a.646.646 0 0 0-.645-.646l-2.954.723a.644.644 0 0 0-.488.625v2.654a1.284 1.284 0 0 0-.451-.091 1.3 1.3 0 1 0 1.3 1.3 1.223 1.223 0 0 0-.033-.162c.01.01.023.024.033.032V8.345l2.388-.607V9.8a1.285 1.285 0 0 0-.459-.093 1.3 1.3 0 1 0 1.3 1.3h.008zM6.033 12.37a.551.551 0 1 1 .551-.551.551.551 0 0 1-.551.551zm3.229-.812a.551.551 0 1 1 .551-.551.551.551 0 0 1-.55.551z", role: "presentation" })
        )
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = FileSongIcon;
  } else {
    global.FileSongIcon = FileSongIcon;
  }
})(undefined);