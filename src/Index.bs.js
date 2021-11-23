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
          children: "\n      Hey there! My name is Akhilesh Nagaraj Sastry and in this website, I will really quickly go over the concept \n      of tail call optimization and show you how to implement it in JavaScript using Trampolines\n    "
        }), makeContainer("Introduction"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Tail Call Optimization is a strategy used by compilers (usually functional language compilers like the GHC) \n      to optimize the memory usage of recursive functions. As you probably know, recursion requires the use of a stack \n      to keep track of the execution tree of a recursive function. But this stack can often grow too large too quickly \n      leading to memory errors. This can make recursion infeasible for a lot languages, but functional languages solve this \n      using Tail-call optimization\n    "
        }), makeContainer("What is Tail-call Optimization?"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Many languages don't support Tail-call optimization out-of-the-box. JavaScript is one of these languages. \n      But JS is also an extremely flexible language and as such, there is a way to achieve efficient recursion in the\n      language using trampolines. Trampolines are a concept that have existed since Lisp and at their core, they are\n      essentially a loop in which they invoke a function, and if the function returns another function, they continue \n      the loop and invoke the returned function otherwise if the function doesn't return another function, they stop \n      and return the result.\n    "
        }), makeContainer("What are Trampolines?"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Here is an example of a higher-order trampolining function in JavaScript\n    ",
          code: "const trampoline = fn => (...args) => {\n  let result = fn(...args)\n  while (typeof result === 'function') {\n    result = result()\n  }\n  return result\n}",
          rows: 7
        }), makeContainer("Trampoline Example in JS"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Consider any recursive function like the one below which just takes a number 'n' as input and \n      returns (n+(n-1)+(n-2)+...1). So passing '3' to the function will yield '3+2+1 = 6' as the result.\n      Similar to any recursive function, once the input becomes large enough, the function will cause a \n      'Maximum call stack size exceeded' error.\n    ",
          code: "const recAdd = (n) => {\n  if (n<=1) {\n    return 1;\n  }\n  return n+recAdd(n-1);\n}\n\n// recAdd(3) -> 6\n// recAdd(32222) -> Maximum call stack size exceeded",
          rows: 9
        }), makeContainer("Trampolines in action Part 1"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Now let's take the same function and pass it to our higher-order trampolining function converting it into a\n      trampolined function. Now with our modified function, we can pass large inputs and not have to worry about \n      running out of space. Notice we had to adjust the way in which the function is written for it to be converted \n      into a trampoline.\n    ",
          code: "const _tcoRecAdd = (n, sum = 0) => {\n  if (n<=1) {\n    return sum+1;\n  }\n  return () => _tcoRecAdd(n-1, n+sum);\n};\nconst tcoRecAdd = trampoline(_tcoRecAdd);\n\n// tcoRecAdd(3) -> 6\n// tcoRecAdd(32222) -> 519144753",
          rows: 10
        }), makeContainer("Trampolines in action Part 2"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Trampolines allow you to use recursion efficiently stack-oriented programming languages allowing you to benefit \n      from the expressiveness of recursive functions. Recursive functions tend to be smaller, simpler and easier to read \n      than their iterative counterparts. And in some cases, iterative solutions may not even be feasible (Ex: traversing \n      a graph), and you are better using a recursive function anyway. In these situations, trampolines can help ensure that\n      you don't want to have worry about running out of memory.  \n    "
        }), makeContainer("What Trampolines can do for you!"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      Trampolines cannot make recusion time-efficient. If a solution like a factorial function has repeated branches\n      for example, you will still need to optimize it. Having a trampoline doesn't automatically remove this problem for \n      you.\n    "
        }), makeContainer("What Trampolines cannot do for you!"));

ReactDom.render(React.createElement(TextContainer$TrampoliningWebsite.make, {
          children: "\n      This website was built using ReasonML. A language from the ML-family inspired heavily by OCaml.  \n    "
        }), makeContainer("Built using ReasonML"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
