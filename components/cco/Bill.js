(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bill = function Bill() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bill", role: "img", className: "symbol symbol-bill" },
  React.createElement(
    "title",
    { id: "title-bill" },
    "bill icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.061 6.217a4.187 4.187 0 0 0-.72-1.244 3.407 3.407 0 0 0-1.054-.832 2.833 2.833 0 0 0-1.3-.3 2.863 2.863 0 0 0-1.3.3 3.362 3.362 0 0 0-1.057.832 3.914 3.914 0 0 0-.706 1.244 4.688 4.688 0 0 0 0 3.056 3.925 3.925 0 0 0 .706 1.244 3.391 3.391 0 0 0 1.057.832 2.908 2.908 0 0 0 2.593 0 3.406 3.406 0 0 0 1.058-.832 4.2 4.2 0 0 0 .72-1.244 4.49 4.49 0 0 0 0-3.056zm-1.085 3.8h-3.8V9.011h1.208V6.4c-.023.041-.572.547-.572.547L6 6.173l1.544-1.3h1.21v4.138h1.222z", role: "presentation" }),
    React.createElement("path", { d: "M15.794 1.917a.669.669 0 0 0-.463-.176H.687a.693.693 0 0 0-.481.176.543.543 0 0 0-.195.418v10.8a.556.556 0 0 0 .195.434.689.689 0 0 0 .481.177h14.644a.665.665 0 0 0 .463-.177.556.556 0 0 0 .2-.434v-10.8a.543.543 0 0 0-.2-.418zm-14.22 8.23a1.8 1.8 0 0 0-.363.037V5.306a1.791 1.791 0 0 0 .363.038 2.476 2.476 0 0 0 2.472-2.4h7.936a2.476 2.476 0 0 0 2.472 2.4 1.787 1.787 0 0 0 .335-.035v4.872a1.881 1.881 0 0 0-.335-.034 2.475 2.475 0 0 0-2.472 2.4H4.046a2.475 2.475 0 0 0-2.472-2.4z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bill;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Bill = Bill;
  }
})(this)
