(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Menu = function Menu() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-menu" },
  React.createElement(
    "title",
    { id: "title" },
    "menu icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.781 1.726a.636.636 0 0 0-.462-.194H.722a.656.656 0 0 0-.479.194.626.626 0 0 0-.194.462v2.129a.626.626 0 0 0 .194.462.65.65 0 0 0 .479.2h14.6a.666.666 0 0 0 .656-.657V2.188a.626.626 0 0 0-.197-.462zM15.319 6.4H.722a.656.656 0 0 0-.479.194.626.626 0 0 0-.194.462V9.18a.626.626 0 0 0 .194.462.65.65 0 0 0 .479.2h14.6a.665.665 0 0 0 .656-.657V7.051a.626.626 0 0 0-.194-.462.636.636 0 0 0-.465-.189zm0 4.859H.722a.656.656 0 0 0-.479.194.626.626 0 0 0-.194.462v2.129a.626.626 0 0 0 .194.462.65.65 0 0 0 .479.2h14.6a.665.665 0 0 0 .656-.657v-2.134a.626.626 0 0 0-.194-.462.636.636 0 0 0-.465-.194z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Menu;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Menu = Menu;
  }
})(this)
