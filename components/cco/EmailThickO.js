(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EmailThickO = function EmailThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-email-thick-o", role: "img", className: "symbol symbol-email-thick-o" },
  React.createElement(
    "title",
    { id: "title-email-thick-o" },
    "email-thick-o icon"
  ),
  React.createElement("path", { d: "M15.905 2.88a.873.873 0 0 0-.042-.208.935.935 0 0 0-.1-.175.846.846 0 0 0-.071-.124c-.008-.01-.02-.013-.028-.022a.965.965 0 0 0-.167-.129.97.97 0 0 0-.139-.094 1 1 0 0 0-.167-.045 1.02 1.02 0 0 0-.2-.041c-.012 0-.022-.006-.034-.006H.96a.978.978 0 0 0-.219.044 1.065 1.065 0 0 0-.153.034 1.022 1.022 0 0 0-.088.062.953.953 0 0 0-.223.157l-.012.008a.9.9 0 0 0-.078.125.908.908 0 0 0-.115.185.942.942 0 0 0-.047.229.949.949 0 0 0-.025.131v10.014A.976.976 0 0 0 .975 14h13.982a.976.976 0 0 0 .975-.975V3.011a.951.951 0 0 0-.027-.131zm-3.564 1.106L7.688 8.013 3.426 3.986zM1.949 12.05V5.273l5.041 4.763a.974.974 0 0 0 1.308.029l5.684-4.921v6.906z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.EmailThickO = EmailThickO;
  }
})(this)
