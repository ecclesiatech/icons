(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Event = function Event() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-event" },
  React.createElement(
    "title",
    { id: "title" },
    "event icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M5.932 9.776a.45.45 0 0 1 .133.406L5.482 12.6c-.033.133.037.184.154.111l2.121-1.3a.445.445 0 0 1 .426 0l2.121 1.3c.117.072.185.022.154-.111l-.582-2.419a.444.444 0 0 1 .131-.406L11.9 8.162c.106-.089.078-.171-.059-.182l-2.48-.193a.451.451 0 0 1-.346-.25l-.949-2.3c-.053-.127-.139-.127-.191 0l-.951 2.3a.447.447 0 0 1-.344.25L4.1 7.98c-.137.011-.162.093-.059.182z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M15.5 2.326h-1.433V1.257c0-.7-.9-1.271-1.605-1.271s-1.64.57-1.64 1.271v1.069H4.8V1.257c0-.7-.9-1.271-1.6-1.271s-1.64.57-1.64 1.271v1.069H.5a.5.5 0 0 0-.5.5v12.692a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V2.826a.5.5 0 0 0-.5-.5zm-3.577-.749a.521.521 0 1 1 1.042 0v.7a.521.521 0 0 1-1.042 0zm-9.28 0a.521.521 0 1 1 1.042 0v.7a.521.521 0 0 1-1.042 0zM14.416 14.5H1.581V3.883h12.835z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Event;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Event = Event;
  }
})(this)
