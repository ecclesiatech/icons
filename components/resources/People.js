(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var People = function People() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-people" },
  React.createElement(
    "title",
    { id: "title" },
    "people icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M16 16a22.682 22.682 0 0 0-.217-3.343c-.275-.468-.917-.789-2.107-1.287s-1.566-.914-1.566-1.81c0-.538.362-.362.522-1.347.066-.409.386-.007.447-.939 0-.372-.175-.464-.175-.464s.089-.55.123-.974a1.78 1.78 0 0 0-1.913-1.89A1.78 1.78 0 0 0 9.2 5.835c.035.424.123.974.123.974s-.174.092-.174.464c.061.933.381.531.447.939.159.985.522.809.522 1.347a1.449 1.449 0 0 1-.662 1.34c2.592 1.3 2.94 1.562 2.94 2.722V16zm-7.821-4.18C6.6 11.159 6.091 10.6 6.091 9.407c0-.717.483-.483.7-1.8.088-.545.515-.009.6-1.253 0-.5-.233-.619-.233-.619s.118-.733.165-1.3a2.373 2.373 0 0 0-2.56-2.515 2.373 2.373 0 0 0-2.55 2.521c.046.565.164 1.3.164 1.3s-.233.123-.233.619c.082 1.244.508.708.6 1.253.212 1.313.7 1.079.7 1.8 0 1.194-.506 1.752-2.088 2.414-.49.195-1.356.507-1.356 1.258V16h11.115v-2.185c0-.686-1.349-1.331-2.936-1.995z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = People;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.People = People;
  }
})(this)
