(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AttendeeType = function AttendeeType() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-attendee-type", role: "img", className: "symbol symbol-attendee-type" },
  React.createElement(
    "title",
    { id: "title-attendee-type" },
    "attendee-type icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.751 9.28a3.227 3.227 0 1 0 3.227 3.227 3.227 3.227 0 0 0-3.227-3.227zm-.007 5.429a.473.473 0 0 1-.454-.44.052.052 0 0 1 0-.022.055.055 0 0 1 0-.023.456.456 0 0 1 .911.023.469.469 0 0 1-.457.462zm.91-2.483c-.2.183-.922.524-.568.865a.075.075 0 0 1-.032.124l-.487.164a.072.072 0 0 1-.072-.019.772.772 0 0 1-.211-.5.055.055 0 0 1 0-.018.112.112 0 0 1 0-.02c.028-.445.375-.613.683-.871.206-.171.307-.519-.056-.6a.875.875 0 0 0-.9.337.074.074 0 0 1-.105 0l-.371-.411a.075.075 0 0 1 0-.1 1.616 1.616 0 0 1 1.4-.557 1.1 1.1 0 0 1 .962.589.924.924 0 0 1-.243 1.017z", role: "presentation" }),
    React.createElement("path", { d: "M11.155 4.851s.156-.846.217-1.5c.076-.81-.468-2.9-3.372-2.9s-3.449 2.1-3.372 2.905c.061.651.217 1.5.217 1.5s-.308.142-.308.713c.108 1.434.672.816.789 1.444.281 1.515.919 1.245.919 2.071 0 1.378-.668 2.021-2.761 2.783S.022 13.407.022 13.939v1.513A.548.548 0 0 0 .57 16h9.474a4.793 4.793 0 0 1-1.52-3.493 4.217 4.217 0 0 1 1.259-3 3.329 3.329 0 0 1-.028-.424c0-.826.638-.556.919-2.071.116-.628.68-.01.789-1.444 0-.575-.308-.717-.308-.717zM15.458 16h.52v-.521a4.2 4.2 0 0 1-.52.521z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AttendeeType;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.AttendeeType = AttendeeType;
  }
})(this)
