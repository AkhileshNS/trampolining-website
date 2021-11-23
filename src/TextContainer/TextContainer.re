[@react.component]
let make = (~children) => {
  let (show, setShow) = React.useState(() => true);

  React.useEffect0(() => {
    let id =
      Js.Global.setInterval(
        () => setShow(previousShow => !previousShow),
        1000,
      );

    Some(() => Js.Global.clearInterval(id));
  });

  <div> children </div>;
};
