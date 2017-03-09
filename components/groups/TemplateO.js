(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var TemplateO = function TemplateO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-template-o" },
  React.createElement(
    "title",
    { id: "title" },
    "template-o icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M14.819 0H1.11A1.145 1.145 0 0 0-.035 1.145v13.71A1.145 1.145 0 0 0 1.11 16h13.71a1.145 1.145 0 0 0 1.145-1.145V1.145A1.145 1.145 0 0 0 14.819 0zm-.857 5.788h-6.29V2h6.29zM1.966 2h3.7v12h-3.7zm5.706 12V7.79h6.29V14z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TemplateO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.TemplateO = TemplateO;
  }
})(this)