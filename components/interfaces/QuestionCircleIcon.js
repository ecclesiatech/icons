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

  var QuestionCircleIcon = function QuestionCircleIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-question-circle" },
      React.createElement(
        "title",
        { id: "title" },
        "question-circle icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M7.994.044a7.962 7.962 0 1 0 7.962 7.962A7.963 7.963 0 0 0 7.994.044zm-.017 13.4a1.169 1.169 0 0 1-1.122-1.085.192.192 0 0 1 0-.055.178.178 0 0 1 0-.058A1.126 1.126 0 0 1 9.1 12.3a1.158 1.158 0 0 1-1.123 1.14zm2.244-6.125c-.493.451-2.275 1.291-1.4 2.134a.184.184 0 0 1-.08.306l-1.2.405a.182.182 0 0 1-.178-.047 1.912 1.912 0 0 1-.523-1.249.176.176 0 0 1 0-.046.2.2 0 0 1 0-.049c.068-1.1.925-1.512 1.686-2.148.507-.422.756-1.281-.14-1.485a2.16 2.16 0 0 0-2.225.831.183.183 0 0 1-.259 0q-.457-.507-.916-1.013a.186.186 0 0 1 0-.259 3.984 3.984 0 0 1 3.451-1.373 2.711 2.711 0 0 1 2.374 1.453 2.283 2.283 0 0 1-.59 2.536z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = QuestionCircleIcon;
  } else {
    global.QuestionCircleIcon = QuestionCircleIcon;
  }
})(undefined);