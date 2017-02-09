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

  var MenuIcon = function MenuIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-menu" },
      React.createElement(
        "title",
        { id: "title" },
        "menu icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15.307 1.412a.636.636 0 0 1 .462.194.626.626 0 0 1 .194.462v1.876a.666.666 0 0 1-.656.657H.71a.65.65 0 0 1-.479-.2.626.626 0 0 1-.194-.462V2.068a.626.626 0 0 1 .194-.462.656.656 0 0 1 .479-.194zm0 5.047a.629.629 0 0 1 .462.194.618.618 0 0 1 .194.453v1.885a.616.616 0 0 1-.194.458.639.639 0 0 1-.462.19H.71a.651.651 0 0 1-.479-.2.616.616 0 0 1-.194-.453V7.107a.612.612 0 0 1 .194-.457.66.66 0 0 1 .479-.19zm0 5.038a.663.663 0 0 1 .656.656v1.858a.649.649 0 0 1-.194.48.629.629 0 0 1-.462.194H.71a.649.649 0 0 1-.479-.194.649.649 0 0 1-.194-.48v-1.857a.629.629 0 0 1 .194-.462.649.649 0 0 1 .479-.192z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = MenuIcon;
  } else {
    global.MenuIcon = MenuIcon;
  }
})(undefined);