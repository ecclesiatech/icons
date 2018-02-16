(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ContactOutline = function ContactOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-contact-outline", role: "img", className: "symbol symbol-contact-outline" },
  React.createElement(
    "title",
    { id: "title-contact-outline" },
    "contact-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.213 6.183H8.482V5.065h4.731zM3.193 5.065h4.213v4.213H3.193z", role: "presentation" }),
    React.createElement("path", { d: "M13.388 2H2.434A2.436 2.436 0 0 0 0 4.436v7.3a2.437 2.437 0 0 0 2.434 2.434h1.217a.609.609 0 0 0 .609-.609v-.608h.608v.608a.609.609 0 0 0 .609.609h4.869a.608.608 0 0 0 .608-.609v-.608h.609v.608a.608.608 0 0 0 .608.609h1.217a2.437 2.437 0 0 0 2.435-2.434v-7.3A2.436 2.436 0 0 0 13.388 2zm1.217 9.737a1.218 1.218 0 0 1-1.217 1.217h-.608v-.609a.608.608 0 0 0-.609-.608h-1.825a.608.608 0 0 0-.609.608v.609H6.086v-.609a.609.609 0 0 0-.609-.608H3.651a.608.608 0 0 0-.608.608v.609h-.609a1.218 1.218 0 0 1-1.217-1.217v-7.3a1.218 1.218 0 0 1 1.217-1.218h10.954a1.218 1.218 0 0 1 1.217 1.217z", role: "presentation" }),
    React.createElement("path", { d: "M8.482 7.326h3.248v1.118H8.482z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ContactOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ContactOutline = ContactOutline;
  }
})(this)
