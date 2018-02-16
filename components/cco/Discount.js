(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Discount = function Discount() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-discount", role: "img", className: "symbol symbol-discount" },
  React.createElement(
    "title",
    { id: "title-discount" },
    "discount icon"
  ),
  React.createElement("path", { d: "M10.324 4.973a3.384 3.384 0 0 0-1.054-.832 2.828 2.828 0 0 0-1.3-.3 2.86 2.86 0 0 0-1.3.3 3.377 3.377 0 0 0-1.058.832 3.912 3.912 0 0 0-.7 1.244 4.671 4.671 0 0 0 0 3.056 3.923 3.923 0 0 0 .705 1.244 3.406 3.406 0 0 0 1.058.832 2.908 2.908 0 0 0 2.593 0 3.391 3.391 0 0 0 1.057-.832 4.156 4.156 0 0 0 .72-1.244 4.474 4.474 0 0 0 0-3.056 4.144 4.144 0 0 0-.721-1.244zm-.364 5.046h-3.8V9.011h1.2V6.4c-.023.041-.571.547-.571.547l-.815-.775 1.544-1.3h1.22v4.139H9.96zm1.166-8.278H8.953v1.206h2.173zM8.953 13.749h2.173v-1.2H8.953zM15.858 2.04a.607.607 0 0 0-.516-.3H13.61v1.207h1V4.1h1.35V2.335a.527.527 0 0 0-.102-.295zM3.765 11.61a2.44 2.44 0 0 0-.568-.762 2.747 2.747 0 0 0-.845-.512 2.834 2.834 0 0 0-1.035-.191v-4.8a2.834 2.834 0 0 0 1.035-.191 2.728 2.728 0 0 0 .848-.512 2.452 2.452 0 0 0 .568-.762 2.111 2.111 0 0 0 .213-.933h2.488V1.741H.657a.694.694 0 0 0-.481.176.542.542 0 0 0-.194.418v10.8a.556.556 0 0 0 .194.434.69.69 0 0 0 .481.177h5.812v-1.2h-2.49a2.12 2.12 0 0 0-.214-.936zm10.844-2.938h1.35V6.587h-1.35zm0 3.874h-1v1.2h1.732a.611.611 0 0 0 .538-.331.553.553 0 0 0 .079-.28v-1.979h-1.35z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Discount;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Discount = Discount;
  }
})(this)
