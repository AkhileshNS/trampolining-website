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
      Hey there!
      In this website, you can enter your JavaScript function and 
      we will automatically check if it can be tail-call optimized.
      If it can, we will do exactly that using Trampolining (https://blog.logrocket.com/using-trampolines-to-manage-large-recursive-loops-in-javascript-d8c9db095ae3/)
    ")}
  </TextContainer>,
  makeContainer("Auto-trampoliner"),
);

ReactDOMRe.render(
  <TextContainer>
    {React.string("
      This website was built using ReasonML. A language from the ML-family inspired heavily by OCaml.  
    ")}
  </TextContainer>,
  makeContainer("Built using ReasonML"),
);
