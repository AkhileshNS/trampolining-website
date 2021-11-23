'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Styles$TrampoliningWebsite = require("./Styles.bs.js");
var TextContainer$TrampoliningWebsite = require("./TextContainer/TextContainer.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = Styles$TrampoliningWebsite.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Hey there!\n      In this website, you can enter your JavaScript function and \n      we will automatically check if it can be tail-call optimized.\n      If it can, we will do exactly that using Trampolining (https://blog.logrocket.com/using-trampolines-to-manage-large-recursive-loops-in-javascript-d8c9db095ae3/)\n    "
        }), makeContainer("Auto-trampoliner"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      This website was built using ReasonML. A language from the ML-family inspired heavily by OCaml.  \n    "
        }), makeContainer("Built using ReasonML"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
