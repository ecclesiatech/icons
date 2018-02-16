(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SmsThickO = function SmsThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-sms-thick-o", role: "img", className: "symbol symbol-sms-thick-o" },
  React.createElement(
    "title",
    { id: "title-sms-thick-o" },
    "sms-thick-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 .088A7.942 7.942 0 0 0 .9 11.553l-.8 3.178a.992.992 0 0 0 .961 1.234.98.98 0 0 0 .24-.03l3.178-.794A7.936 7.936 0 1 0 8 .088zM8 13.98a5.963 5.963 0 0 1-2.909-.759.985.985 0 0 0-.725-.1l-1.941.485.485-1.943a.989.989 0 0 0-.1-.726A5.946 5.946 0 1 1 8 13.98z", role: "presentation" }),
    React.createElement("path", { d: "M5.405 7.126a.983.983 0 1 0 .983.983.983.983 0 0 0-.983-.983zm2.595 0a.983.983 0 1 0 .983.983A.983.983 0 0 0 8 7.126zm2.6 0a.983.983 0 1 0 .983.983.983.983 0 0 0-.983-.983z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SmsThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.SmsThickO = SmsThickO;
  }
})(this)
