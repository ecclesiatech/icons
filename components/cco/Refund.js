(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Refund = function Refund() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-refund", role: "img", className: "symbol symbol-refund" },
  React.createElement(
    "title",
    { id: "title-refund" },
    "refund icon"
  ),
  React.createElement("path", { d: "M15.67 5.953A7.946 7.946 0 1 0 .321 10.068a7.786 7.786 0 0 0 2.59 4.014l.006.035-.724 1.083a.26.26 0 0 0 .195.4l4.752.318a.259.259 0 0 0 .246-.374l-2.1-4.282a.253.253 0 0 0-.44-.03l-.623.935a5.556 5.556 0 0 1-1.668-2.7 5.635 5.635 0 1 1 7.222 3.893.238.238 0 0 0-.16.276l.377 1.783a.237.237 0 0 0 .3.181 7.953 7.953 0 0 0 5.376-9.647zM10.1 9.137a2.293 2.293 0 0 0-.152-.892 1.509 1.509 0 0 0-.371-.554 6.3 6.3 0 0 0-.826-.564 5.932 5.932 0 0 1-.851-.586.74.74 0 0 1-.149-.526.63.63 0 0 1 .073-.339.241.241 0 0 1 .218-.112.228.228 0 0 1 .236.13 1.2 1.2 0 0 1 .055.474v.21a.155.155 0 0 0 .132.155l1.285.022a.155.155 0 0 0 .177-.149c0-.142.01-.154.01-.193a1.584 1.584 0 0 0-.37-1.113 1.731 1.731 0 0 0-1.1-.5v-.3a.2.2 0 0 0-.2-.2h-.334a.2.2 0 0 0-.2.2v.31a1.965 1.965 0 0 0-1.208.5 1.525 1.525 0 0 0-.4 1.123 2 2 0 0 0 .19.887 1.788 1.788 0 0 0 .452.607 11.127 11.127 0 0 0 .989.675 1.134 1.134 0 0 1 .511.5 2.777 2.777 0 0 1 .075.77.55.55 0 0 1-.08.328.274.274 0 0 1-.24.109.221.221 0 0 1-.238-.156 3.774 3.774 0 0 1-.049-.8v-.261a.156.156 0 0 0-.135-.155l-1.28-.016a.156.156 0 0 0-.177.155v.194a1.95 1.95 0 0 0 .476 1.5 1.9 1.9 0 0 0 1.112.493v.421a.2.2 0 0 0 .2.2h.336a.2.2 0 0 0 .2-.2v-.4a1.871 1.871 0 0 0 1.227-.6 2.023 2.023 0 0 0 .406-1.347z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Refund;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Refund = Refund;
  }
})(this)
