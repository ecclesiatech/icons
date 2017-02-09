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

  var AddHouseholdIcon = function AddHouseholdIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-add-household" },
      React.createElement(
        "title",
        { id: "title" },
        "add-household icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M15.4 7.79L9.082.61a1.577 1.577 0 0 0-2.367 0L.4 7.79a1.51 1.51 0 0 0-.257 1.661 1.533 1.533 0 0 0 1.437.9h.574v3.925A1.587 1.587 0 0 0 3.693 15.9h8.423a1.62 1.62 0 0 0 1.579-1.623v-3.929h.523a1.532 1.532 0 0 0 1.437-.9A1.509 1.509 0 0 0 15.4 7.79zM7.917 1.637L14.243 8.8c0 .007-.007 0-.026 0h-2.076v5.479c0 .013-.012.07-.025.07H3.693c-.013 0 .015-.057.015-.07V8.855H1.587c-.006 0-.023-.021-.015-.038l6.314-7.18", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M9.674 8.285H8.633V7.222a.759.759 0 0 0-.755-.777h-.011a.786.786 0 0 0-.787.777v1.063h-.957a.75.75 0 0 0-.777.744v.016a.791.791 0 0 0 .777.793h.956v.934a.8.8 0 0 0 .8.777h-.012a.768.768 0 0 0 .766-.777v-.933h1.041a.805.805 0 0 0 .777-.809v.016a.763.763 0 0 0-.777-.761z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AddHouseholdIcon;
  } else {
    global.AddHouseholdIcon = AddHouseholdIcon;
  }
})(undefined);