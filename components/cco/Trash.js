(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Trash = function Trash() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-trash", role: "img", className: "symbol symbol-trash" },
  React.createElement(
    "title",
    { id: "title-trash" },
    "trash icon"
  ),
  React.createElement("path", { d: "M3.26 14.8a1.143 1.143 0 0 0 1.13 1.166H12a1.143 1.143 0 0 0 1.13-1.166l.439-10.051H2.839zm7.213-7.628c0-.336.185-.6.506-.6s.505.265.505.6v6.38c0 .336-.185.6-.505.6s-.506-.265-.506-.6zm-2.794 0a.532.532 0 0 1 .506-.6c.321 0 .506.265.506.6v6.38c0 .336-.185.6-.506.6a.532.532 0 0 1-.506-.6zm-2.763 0c0-.336.185-.6.506-.6a.532.532 0 0 1 .506.6v6.38a.532.532 0 0 1-.506.6c-.321 0-.506-.265-.506-.6zm8.852-5.251h-3.257V.582c0-.318-.152-.548-.472-.548h-3.7a.5.5 0 0 0-.506.548v1.339H2.636a.528.528 0 0 0-.523.583v.613c0 .335.2.689.523.689h11.149c.321 0 .489-.371.489-.689V2.5c-.017-.332-.185-.579-.506-.579zm-4.181 0h-2.8V.978h2.8z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Trash;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Trash = Trash;
  }
})(this)
