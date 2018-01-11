(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormNumber = function FormNumber() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-number", role: "img", className: "symbol symbol-form-number" },
  React.createElement("path", { className: "st0", d: "M1.8 6l-.5.2H1c-.3 0-.6-.3-.6-.6s.2-.5.5-.6l1-.3c.3-.1.5-.1.7-.1.4 0 .7.3.7.7v5.4c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7V6zM5 9.9l1.9-1.6c.8-.7 1.2-1.1 1.2-1.6 0-.6-.4-.9-.9-.9-.5.1-.8.2-1.1.6-.1.1-.3.3-.5.3-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.5.5-.6 1.2-1 2.2-1 1.4 0 2.3.8 2.3 2.1 0 1.1-.6 1.7-1.8 2.6l-1.1.8h2.4c.4 0 .6.3.6.6s-.3.6-.6.6H5.4c-.5 0-.8-.3-.8-.7 0-.1.1-.4.4-.6zm5.9.8c-.1-.1-.3-.3-.3-.5 0-.4.3-.7.7-.7.2 0 .4.1.5.2.4.3.8.5 1.3.5.6 0 1-.3 1-.8s-.5-.9-1.3-.9h-.2c-.3 0-.6-.3-.6-.6 0-.2.1-.4.3-.6L13.6 6h-2.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.3c.4 0 .8.3.8.7 0 .4-.2.6-.4.8l-1.3 1.3c.9.2 1.8.6 1.8 1.9 0 1.3-.9 2.2-2.4 2.2-1.1-.2-1.8-.5-2.4-1z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormNumber;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.FormNumber = FormNumber;
  }
})(this)