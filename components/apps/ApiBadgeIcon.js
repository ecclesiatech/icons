(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ApiBadgeIcon = function ApiBadgeIcon() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 187 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-api-badge" },
  React.createElement(
    "title",
    { id: "title" },
    "api-badge icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { "class": "cls-2", d: "M16.235 15.211l.87-1.508-2.153-1.243-.882 1.528a3.622 3.622 0 0 0-1.446.007l-.879-1.522-2.153 1.243.893 1.546a3.809 3.809 0 0 0-.716 1.238H8v2.486h1.759a3.812 3.812 0 0 0 .724 1.267l-.868 1.5L11.768 23l.853-1.478a3.781 3.781 0 0 0 1.509 0l.845 1.463 2.153-1.243-.856-1.482a3.81 3.81 0 0 0 .739-1.3h1.709v-2.487h-1.735a3.814 3.814 0 0 0-.75-1.262zm-4.946 2.548a2.092 2.092 0 1 1 2.092 2.092 2.092 2.092 0 0 1-2.092-2.092z", role: "presentation" }),
  React.createElement("path", { "class": "cls-2", d: "M19.779 10.28v1.16a2.355 2.355 0 0 0-.293.132 2.4 2.4 0 0 0-1.181 2.373l-.967.558.906 1.569.952-.55a2.306 2.306 0 0 0 2.968 0l.957.552.906-1.569-.972-.561a2.354 2.354 0 0 0-1.465-2.505V10.28zm1.352 4.141a.892.892 0 1 1 .327-1.219.892.892 0 0 1-.326 1.219zm21.775 9.669H36.9V8.688h6.007c4.841 0 8.186 3.323 8.186 7.657v.044c-.001 4.334-3.346 7.701-8.187 7.701zm4.643-7.7a4.423 4.423 0 0 0-4.643-4.643h-2.618v9.285h2.618a4.389 4.389 0 0 0 4.643-4.6zm16.522 2.969h-8.207a2.735 2.735 0 0 0 2.882 2.31 3.865 3.865 0 0 0 2.86-1.21l1.915 1.694a6.23 6.23 0 0 1-10.979-3.9v-.044a5.872 5.872 0 0 1 5.831-6.139c3.938 0 5.743 3.059 5.743 6.4v.044c-.001.339-.023.537-.045.845zm-5.7-4.6a2.629 2.629 0 0 0-2.552 2.509h5.039a2.529 2.529 0 0 0-2.486-2.508zm13.66 9.419h-3.037L64.351 12.3h3.542l2.641 7.9 2.666-7.9h3.477zm16.235-4.819h-8.207a2.735 2.735 0 0 0 2.882 2.31 3.865 3.865 0 0 0 2.86-1.21l1.915 1.694a6.23 6.23 0 0 1-10.979-3.9v-.044a5.872 5.872 0 0 1 5.831-6.139c3.938 0 5.743 3.059 5.743 6.4v.044c-.001.339-.023.537-.045.845zm-5.7-4.6a2.629 2.629 0 0 0-2.552 2.509h5.039a2.529 2.529 0 0 0-2.485-2.508zm7.745 9.331V8.027h3.344V24.09zm11.199.264a6.13 6.13 0 0 1-6.359-6.1v-.044a6.387 6.387 0 0 1 12.762-.044v.044a6.19 6.19 0 0 1-6.403 6.144zm3.1-6.139a3.134 3.134 0 0 0-3.1-3.256 3.021 3.021 0 0 0-3.059 3.212v.044a3.134 3.134 0 0 0 3.1 3.257 3.022 3.022 0 0 0 3.059-3.213zm11.661 6.095a4.529 4.529 0 0 1-3.674-1.76v5.06h-3.345V12.3h3.348v1.69a4.33 4.33 0 0 1 3.674-1.914c2.75 0 5.369 2.156 5.369 6.095v.044c-.003 3.939-2.577 6.095-5.372 6.095zm2.024-6.139a2.894 2.894 0 1 0-5.743 0v.044a2.894 2.894 0 1 0 5.743 0zm16.126 1.188h-8.207a2.735 2.735 0 0 0 2.882 2.31 3.865 3.865 0 0 0 2.86-1.21l1.915 1.694a6.23 6.23 0 0 1-10.979-3.9v-.044a5.872 5.872 0 0 1 5.831-6.139c3.938 0 5.743 3.059 5.743 6.4v.044c0 .339-.023.537-.045.845zm-5.7-4.6a2.629 2.629 0 0 0-2.552 2.509h5.039a2.529 2.529 0 0 0-2.486-2.508zm14.522.816c-2.223 0-3.587 1.342-3.587 4.159v4.356h-3.344V12.3h3.344v2.376a3.643 3.643 0 0 1 3.763-2.6v3.5zm19.403 8.515l-1.408-3.455h-6.513l-1.408 3.455h-3.454l6.6-15.512h3.125l6.6 15.512zm-4.664-11.442l-2.047 5h4.093zm15.027 6.821h-2.575v4.621h-3.388V8.688h6.293c3.674 0 5.9 2.178 5.9 5.325v.044c-.004 3.564-2.776 5.412-6.23 5.412zm2.794-5.391c0-1.519-1.056-2.333-2.75-2.333h-2.619v4.708h2.685a2.385 2.385 0 0 0 2.685-2.332zM181.7 24.09V8.688h3.389v15.4z", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ApiBadgeIcon
  } else {
    global.ApiBadgeIcon = ApiBadgeIcon
  }
})(this)
