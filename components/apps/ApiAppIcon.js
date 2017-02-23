(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ApiAppIcon = function ApiAppIcon() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-api-app" },
  React.createElement(
    "title",
    { id: "title" },
    "api-app icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { "class": "cls-2", d: "M16.235 15.211l.87-1.508-2.153-1.243-.882 1.528a3.622 3.622 0 0 0-1.446.007l-.879-1.522-2.153 1.243.893 1.546a3.809 3.809 0 0 0-.716 1.238H8v2.486h1.759a3.812 3.812 0 0 0 .724 1.267l-.868 1.5L11.768 23l.853-1.478a3.781 3.781 0 0 0 1.509 0l.845 1.463 2.153-1.243-.856-1.482a3.81 3.81 0 0 0 .739-1.3h1.709v-2.487h-1.735a3.814 3.814 0 0 0-.75-1.262zm-4.946 2.548a2.092 2.092 0 1 1 2.092 2.092 2.092 2.092 0 0 1-2.092-2.092z", role: "presentation" }),
  React.createElement("path", { "class": "cls-2", d: "M19.779 10.28v1.16a2.355 2.355 0 0 0-.293.132 2.4 2.4 0 0 0-1.181 2.373l-.967.558.906 1.569.952-.55a2.306 2.306 0 0 0 2.968 0l.957.552.906-1.569-.972-.561a2.354 2.354 0 0 0-1.465-2.505V10.28zm1.352 4.141a.892.892 0 1 1 .327-1.219.892.892 0 0 1-.326 1.219z", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ApiAppIcon
  } else {
    global.ApiAppIcon = ApiAppIcon
  }
})(this)
