(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PrimaryRoom = function PrimaryRoom() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-primary-room" },
  React.createElement(
    "title",
    { id: "title" },
    "primary-room icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8.657 3.33H6.874a.094.094 0 0 0-.1.1v5.222a.094.094 0 0 0 .1.1H7.98a.094.094 0 0 0 .1-.1V7.425a.052.052 0 0 1 .059-.06h.518c1.2 0 1.991-.482 1.991-2.015s-.757-2.02-1.991-2.02zm-.04 2.89h-.479a.053.053 0 0 1-.059-.06V4.535a.052.052 0 0 1 .059-.06h.478c.508 0 .726.108.726.875s-.218.87-.725.87z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M14.089 3.716a6.028 6.028 0 0 0-3.22-3.242A5.9 5.9 0 0 0 8.509 0a5.971 5.971 0 0 0-2.36.474 6.046 6.046 0 0 0-3.243 3.242 5.988 5.988 0 0 0-.474 2.371 5.372 5.372 0 0 0 .266 1.7 7.447 7.447 0 0 0 .7 1.54s3.831 5.438 4.146 5.838c.276.35.671.838.952.838.328 0 .635-.48.9-.849L13.6 9.345a7.365 7.365 0 0 0 .7-1.545 5.529 5.529 0 0 0 .263-1.715 5.993 5.993 0 0 0-.474-2.369zm-5.568 6.456a4.051 4.051 0 0 1-4.109-4.109 4.109 4.109 0 0 1 4.109-4.109c2.269 0 4.38 1.856 4.109 4.109a4.655 4.655 0 0 1-4.109 4.109z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PrimaryRoom;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.PrimaryRoom = PrimaryRoom;
  }
})(this)
