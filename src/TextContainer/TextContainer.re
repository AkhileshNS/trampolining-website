[@react.component]
let make = (~children, ~code = "", ~rows = 24) => {
  <div> children {code==="" ? <br /> : <textarea rows={rows} value={code} />} </div>;
};
