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

  var PersonPencilIcon = function PersonPencilIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-pencil" },
      React.createElement(
        "title",
        { id: "title" },
        "person-pencil icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M3.263 8.4l3.816-1.551 2.7 1.1a.576.576 0 0 0 .75-.309.566.566 0 0 0-.312-.742l-1.6-.651a3.3 3.3 0 0 0 1.816-2.93 3.352 3.352 0 0 0-6.7 0 3.3 3.3 0 0 0 1.815 2.93L2.825 7.353a2.14 2.14 0 0 0-1.344 1.985v2.7a2.162 2.162 0 0 0 2.171 2.148h2.372a.569.569 0 1 0 0-1.137H3.652a1.017 1.017 0 0 1-1.022-1.01v-2.7a1.007 1.007 0 0 1 .633-.939zm1.614-5.085a2.2 2.2 0 1 1 2.2 2.178 2.192 2.192 0 0 1-2.2-2.178zm9.739 4.563l-1.025-.707a1.152 1.152 0 0 0-.858-.187 1.138 1.138 0 0 0-.74.468L7.9 13.253l.017 2.077a.675.675 0 0 0 .291.549.69.69 0 0 0 .62.082l1.979-.7L14.9 9.46a1.129 1.129 0 0 0-.284-1.581zm-4.542 6.433l-1.012.358-.009-1.064 3.881-5.5 1.024.7z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PersonPencilIcon;
  } else {
    global.PersonPencilIcon = PersonPencilIcon;
  }
})(undefined);