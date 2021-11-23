[@bs.val] external document: Js.t({..}) = "document";

let style = document##createElement("style");
document##head##appendChild(style);
style##innerHTML #= Styles.style;

let makeContainer = text => {
  let container = document##createElement("div");
  container##className #= "container";

  let title = document##createElement("div");
  title##className #= "containerTitle";
  title##innerText #= text;

  let content = document##createElement("div");
  content##className #= "containerContent";

  let () = container##appendChild(title);
  let () = container##appendChild(content);
  let () = document##body##appendChild(container);

  content;
};

ReactDOMRe.render(
  <TextContainer>
    {React.string("
      Hey there! My name is Akhilesh Nagaraj Sastry and in this website, I will really quickly go over the concept 
      of tail call optimization and show you how to implement it in JavaScript using Trampolines
    ")}
  </TextContainer>,
  makeContainer("Introduction"),
);

ReactDOMRe.render(
  <TextContainer>
    {React.string("
      Tail Call Optimization is a strategy used by compilers (usually functional language compilers like the GHC) 
      to optimize the memory usage of recursive functions. As you probably know, recursion requires the use of a stack 
      to keep track of the execution tree of a recursive function. But this stack can often grow too large too quickly 
      leading to memory errors. This can make recursion infeasible for a lot languages, but functional languages solve this 
      using Tail-call optimization
    ")}
  </TextContainer>,
  makeContainer("What is Tail-call Optimization?"),
);

ReactDOMRe.render(
  <TextContainer>
    {React.string("
      Many languages don't support Tail-call optimization out-of-the-box. JavaScript is one of these languages. 
      But JS is also an extremely flexible language and as such, there is a way to achieve efficient recursion in the
      language using trampolines. Trampolines are a concept that have existed since Lisp and at their core, they are
      essentially a loop in which they invoke a function, and if the function returns another function, they continue 
      the loop and invoke the returned function otherwise if the function doesn't return another function, they stop 
      and return the result.
    ")}
  </TextContainer>,
  makeContainer("What are Trampolines?"),
);

ReactDOMRe.render(
  <TextContainer rows={7} code="const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}">
    {React.string("
      Here is an example of a higher-order trampolining function in JavaScript
    ")}
  </TextContainer>,
  makeContainer("Trampoline Example in JS"),
);

ReactDOMRe.render(
  <TextContainer rows={9} code="const recAdd = (n) => {
  if (n<=1) {
    return 1;
  }
  return n+recAdd(n-1);
}

// recAdd(3) -> 6
// recAdd(32222) -> Maximum call stack size exceeded">
    {React.string("
      Consider any recursive function like the one below which just takes a number 'n' as input and 
      returns (n+(n-1)+(n-2)+...1). So passing '3' to the function will yield '3+2+1 = 6' as the result.
      Similar to any recursive function, once the input becomes large enough, the function will cause a 
      'Maximum call stack size exceeded' error.
    ")}
  </TextContainer>,
  makeContainer("Trampolines in action Part 1"),
);

ReactDOMRe.render(
  <TextContainer rows={10} code="const _tcoRecAdd = (n, sum = 0) => {
  if (n<=1) {
    return sum+1;
  }
  return () => _tcoRecAdd(n-1, n+sum);
};
const tcoRecAdd = trampoline(_tcoRecAdd);

// tcoRecAdd(3) -> 6
// tcoRecAdd(32222) -> 519144753">
    {React.string("
      Now let's take the same function and pass it to our higher-order trampolining function converting it into a
      trampolined function. Now with our modified function, we can pass large inputs and not have to worry about 
      running out of space. Notice we had to adjust the way in which the function is written for it to be converted 
      into a trampoline.
    ")}
  </TextContainer>,
  makeContainer("Trampolines in action Part 2"),
);

ReactDOMRe.render(
  <TextContainer>
    {React.string("
      Trampolines allow you to use recursion efficiently stack-oriented programming languages allowing you to benefit 
      from the expressiveness of recursive functions. Recursive functions tend to be smaller, simpler and easier to read 
      than their iterative counterparts. And in some cases, iterative solutions may not even be feasible (Ex: traversing 
      a graph), and you are better using a recursive function anyway. In these situations, trampolines can help ensure that
      you don't want to have worry about running out of memory.  
    ")}
  </TextContainer>,
  makeContainer("What Trampolines can do for you!"),
);

ReactDOMRe.render(
  <TextContainer>
    {React.string("
      Trampolines cannot make recusion time-efficient. If a solution like a factorial function has repeated branches
      for example, you will still need to optimize it. Having a trampoline doesn't automatically remove this problem for 
      you.
    ")}
  </TextContainer>,
  makeContainer("What Trampolines cannot do for you!"),
);

ReactDOMRe.render(
  <TextContainer>
    {React.string("
      This website was built using ReasonML. A language from the ML-family inspired heavily by OCaml.  
    ")}
  </TextContainer>,
  makeContainer("Built using ReasonML"),
);
