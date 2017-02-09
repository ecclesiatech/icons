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

  var RecurringIcon = function RecurringIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-recurring" },
      React.createElement(
        "title",
        { id: "title" },
        "recurring icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M7.562 11.6a3.168 3.168 0 0 1 .629-3.52 3.065 3.065 0 0 1 3.473-.638l.035.012-.586.466a.575.575 0 0 0-.1.8.557.557 0 0 0 .79.1l1.485-1.18a.576.576 0 0 0 .2-.565l-.378-1.887a.562.562 0 0 0-.665-.442.57.57 0 0 0-.436.674l.179.868-.014-.008a4.294 4.294 0 0 0-4.865.9 4.44 4.44 0 0 0-.887 4.93.624.624 0 0 0 .571.376.615.615 0 0 0 .254-.055.636.636 0 0 0 .315-.831zm6.82-3.08a.623.623 0 0 0-.825-.322.637.637 0 0 0-.318.836 3.169 3.169 0 0 1-.629 3.52 3.061 3.061 0 0 1-3.4.669l.585-.465a.575.575 0 0 0 .1-.8.557.557 0 0 0-.789-.1l-1.488 1.184a.574.574 0 0 0-.2.565l.382 1.878a.564.564 0 0 0 .55.454.564.564 0 0 0 .551-.686l-.178-.864a4.366 4.366 0 0 0 1.709.353 4.285 4.285 0 0 0 3.068-1.291 4.446 4.446 0 0 0 .882-4.931zM2.208 3.938h10.08V1.76a.657.657 0 0 0-.651-.659h-1.463V.613a.6.6 0 0 0-.594-.6h-.438a.6.6 0 0 0-.594.6V1.1H4.972V.613a.6.6 0 0 0-.594-.6H3.94a.6.6 0 0 0-.594.6V1.1H1.883a.656.656 0 0 0-.65.659v9.886a.657.657 0 0 0 .65.66h3.054v-1.116H2.208z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RecurringIcon;
  } else {
    global.RecurringIcon = RecurringIcon;
  }
})(undefined);