(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LogoutO = function LogoutO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-logout-o", role: "img", className: "symbol symbol-logout-o" },
  React.createElement(
    "title",
    { id: "title-logout-o" },
    "logout-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.629 4.463l-.682.694 2.143 2.105H6.408v.971h7.786l-2.217 2.238.691.685 3.34-3.373-3.379-3.32z", role: "presentation" }),
    React.createElement("path", { d: "M9.922 12.409l-.078.07-.046.035c-.05.036-.11.078-.177.123a6.081 6.081 0 0 1-.676.382 5.154 5.154 0 0 1-2.257.555A5.63 5.63 0 0 1 1 7.877a5.453 5.453 0 0 1 1.948-4.364 6.062 6.062 0 0 1 3.74-1.36 5.063 5.063 0 0 1 2.212.571 6.9 6.9 0 0 1 .7.4c.073.047.136.09.19.129a.648.648 0 0 1 .057.042l.08.061.595-.768-.08-.062a5.787 5.787 0 0 0-.311-.217 7.881 7.881 0 0 0-.806-.456 6.029 6.029 0 0 0-2.637-.673A7.056 7.056 0 0 0 2.33 2.764a6.392 6.392 0 0 0-2.3 5.113 6.59 6.59 0 0 0 6.654 6.668 6.116 6.116 0 0 0 2.682-.652 7.111 7.111 0 0 0 .786-.445c.121-.081.232-.16.3-.216l.078-.063-.546-.679z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LogoutO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.LogoutO = LogoutO;
  }
})(this)
