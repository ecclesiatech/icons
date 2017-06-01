(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ApprovalGroup = function ApprovalGroup() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-approval-group" },
  React.createElement(
    "title",
    { id: "title" },
    "approval-group icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm2.568 3.295l-2.546 2.545a.546.546 0 0 1-.771 0L9.8 12.386a.545.545 0 0 1 .771-.771l1.069 1.069 2.16-2.16a.545.545 0 0 1 .771.771z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M7 14.5H2a.485.485 0 0 1-.5-.48v-2.64a.5.5 0 0 1 .308-.457l4-1.65a10.2 10.2 0 0 1 .982-.342 4.5 4.5 0 1 0-2.921-.467L1.231 9.552A1.98 1.98 0 0 0 0 11.38v2.64A1.99 1.99 0 0 0 2 16h5a.75.75 0 0 0 0-1.5zm-4-10a3 3 0 1 1 3 3 3 3 0 0 1-3-3z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ApprovalGroup;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.ApprovalGroup = ApprovalGroup;
  }
})(this)
