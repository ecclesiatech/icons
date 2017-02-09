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

  var PersonCogIcon = function PersonCogIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-cog" },
      React.createElement(
        "title",
        { id: "title" },
        "person-cog icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M9.269 14.168l-.036-.009-.719-.76v-1.338l.719-.76.03-.007-.016-.026.046-1.068.544-.524a2.781 2.781 0 0 1-.1-.776c0-.827.639-.557.919-2.071.116-.628.681-.01.789-1.444 0-.571-.308-.714-.308-.714s.156-.846.218-1.5c.076-.811-.468-2.906-3.372-2.906S4.53 2.361 4.606 3.172c.061.651.218 1.5.218 1.5s-.308.142-.308.714c.108 1.434.672.816.788 1.444.281 1.514.919 1.244.919 2.071 0 1.377-.668 2.02-2.761 2.783S0 13.225 0 13.757v1.787h9.455L9.249 14.2zm6.687 1.376v-.071l-.071.071z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M15.269 12.033a2.59 2.59 0 0 0-.255-.613l.383-.649-.72-.72-.648.388a2.821 2.821 0 0 0-.613-.255l-.179-.724h-1.015l-.184.731a2.591 2.591 0 0 0-.613.255l-.649-.383-.715.715.389.648a2.821 2.821 0 0 0-.255.613l-.731.184v1.016l.731.184a2.591 2.591 0 0 0 .255.613l-.383.649.72.72.648-.388a2.821 2.821 0 0 0 .613.255l.19.729h1.005l.184-.729a2.589 2.589 0 0 0 .613-.255l.649.383.72-.721-.388-.648a2.82 2.82 0 0 0 .255-.613l.724-.185v-1.016zm-2.537 2.135a1.441 1.441 0 1 1 1.441-1.441 1.44 1.44 0 0 1-1.441 1.441z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PersonCogIcon;
  } else {
    global.PersonCogIcon = PersonCogIcon;
  }
})(undefined);