(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GuestBadge = function GuestBadge() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-guest-badge" },
  React.createElement(
    "title",
    { id: "title" },
    "guest-badge icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.723 7.838h-.669v3.043h.669zm-2.131 3.043L7.6 7.838h-.689l-.686 2.14h-.008l-.678-2.14h-.686l.985 3.043zM13.171 0H3.048a1.332 1.332 0 0 0-1.332 1.332v13.32a1.332 1.332 0 0 0 1.332 1.332h10.123a1.332 1.332 0 0 0 1.329-1.332V1.332A1.332 1.332 0 0 0 13.171 0zM7.177 1.066h2.4a.4.4 0 1 1 0 .8h-2.4a.4.4 0 0 1 0-.8zm6.261 13.32a.533.533 0 0 1-.533.533H3.58a.533.533 0 0 1-.533-.533V6.127a.533.533 0 0 1 .533-.533h9.32a.533.533 0 0 1 .533.533zM5.179 12.93h6.127v-.8H5.179zm6.509-4.79a.909.909 0 0 0-.326-.22 1.268 1.268 0 0 0-.486-.083H9.5v3.043h.669V9.79h.7a1.268 1.268 0 0 0 .486-.083.909.909 0 0 0 .326-.22.841.841 0 0 0 .183-.313 1.162 1.162 0 0 0 0-.722.843.843 0 0 0-.176-.312zm-.456.908a.36.36 0 0 1-.13.139.515.515 0 0 1-.188.066 1.4 1.4 0 0 1-.222.017h-.52v-.912h.52a1.4 1.4 0 0 1 .222.017.517.517 0 0 1 .188.066.361.361 0 0 1 .13.139.585.585 0 0 1 0 .469z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GuestBadge;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.GuestBadge = GuestBadge;
  }
})(this)