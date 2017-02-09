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

  var AssignmentsIcon = function AssignmentsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-assignments" },
      React.createElement(
        "title",
        { id: "title" },
        "assignments icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M3.634 12.9H8.4c.084 0 .125-.017.125-.1v-.789a.959.959 0 0 0-.663-.936l-1.2-.384v-.343l.451-.289a.755.755 0 0 0 .347-.641V8.4a1.379 1.379 0 0 0-1.441-1.356A1.406 1.406 0 0 0 4.538 8.4v1.015a.755.755 0 0 0 .347.641l.451.289v.343l-1.2.384a.959.959 0 0 0-.663.936v.792c0 .081.077.1.161.1z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M11.457 5.549a1.166 1.166 0 0 0-1.166-1.166H1.446A1.166 1.166 0 0 0 .28 5.549v8.845a1.166 1.166 0 0 0 1.166 1.166h8.845a1.166 1.166 0 0 0 1.166-1.166zm-1.6 8.414h-7.98V5.98H9.86zM14.128 10H12.8v1.6h1.92a1.043 1.043 0 0 0 1-1.013V8.665h-1.6zm-8.25-7.988h1.331V.416H5.395c-.532 0-1.113.307-1.113.838v1.823h1.6zM8.539.416h2.927v1.597H8.539zm6.181 0H12.8v1.6h1.331v1.061h1.6V1.254A.9.9 0 0 0 14.72.416zm-.592 3.991h1.597v2.927h-1.597z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AssignmentsIcon;
  } else {
    global.AssignmentsIcon = AssignmentsIcon;
  }
})(undefined);