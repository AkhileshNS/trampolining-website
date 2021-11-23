'use strict';

var React = require("react");

function TextContainer(Props) {
  var children = Props.children;
  var $staropt$star = Props.code;
  var $staropt$star$1 = Props.rows;
  var code = $staropt$star !== undefined ? $staropt$star : "";
  var rows = $staropt$star$1 !== undefined ? $staropt$star$1 : 24;
  return React.createElement("div", undefined, children, code === "" ? React.createElement("br", undefined) : React.createElement("textarea", {
                    rows: rows,
                    value: code
                  }));
}

var make = TextContainer;

exports.make = make;
/* react Not a pure module */
