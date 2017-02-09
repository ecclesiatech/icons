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

  var QuestionCircleOIcon = function QuestionCircleOIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-question-circle-o" },
      React.createElement(
        "title",
        { id: "title" },
        "question-circle-o icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M6.755 11.849a1.109 1.109 0 0 0 .313.811 1.166 1.166 0 0 0 1.6 0 1.137 1.137 0 0 0-1.6-1.618 1.1 1.1 0 0 0-.313.807zm.381-2.236h1.515a1.249 1.249 0 0 1 .073-.71A3.187 3.187 0 0 1 9.1 8.2a5.092 5.092 0 0 1 .526-.639 7.663 7.663 0 0 0 .546-.634 3.712 3.712 0 0 0 .426-.7 1.928 1.928 0 0 0 .173-.831 2.53 2.53 0 0 0-.2-1.04 2.026 2.026 0 0 0-.579-.756 2.5 2.5 0 0 0-.884-.458A3.918 3.918 0 0 0 8 2.993a3.066 3.066 0 0 0-1.482.357 3.857 3.857 0 0 0-1.141.9l.96.851a2.8 2.8 0 0 1 .7-.55 1.775 1.775 0 0 1 .84-.2 1.222 1.222 0 0 1 .9.317 1.133 1.133 0 0 1 .322.839 1.238 1.238 0 0 1-.165.618 4.3 4.3 0 0 1-.414.586c-.165.2-.341.4-.526.606a4.47 4.47 0 0 0-.494.67 3.061 3.061 0 0 0-.329.795 1.789 1.789 0 0 0-.035.83zM.2 8.007A7.872 7.872 0 1 0 8.072.139 7.872 7.872 0 0 0 .2 8.007zm1.45 0a6.422 6.422 0 1 1 6.422 6.419A6.421 6.421 0 0 1 1.65 8.007z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = QuestionCircleOIcon;
  } else {
    global.QuestionCircleOIcon = QuestionCircleOIcon;
  }
})(undefined);