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

  var CommentIcon = function CommentIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-comment" },
      React.createElement(
        "title",
        { id: "title" },
        "comment icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15 7.149a7 7 0 1 0-7.25 7.046c.539.528 2.282 2.016 4.256 1.41 0 0 .587-.162.274-.646a11.671 11.671 0 0 1-.864-1.654A7.059 7.059 0 0 0 15 7.149zM9.373 9.51H5.354a.861.861 0 0 1-.744-.942.859.859 0 0 1 .744-.939h4.02a.859.859 0 0 1 .744.939.861.861 0 0 1-.745.942zm1.211-3.1H5.543a.94.94 0 0 1 0-1.881h5.041a.94.94 0 0 1 0 1.881z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CommentIcon;
  } else {
    global.CommentIcon = CommentIcon;
  }
})(undefined);