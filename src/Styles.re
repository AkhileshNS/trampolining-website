let reasonReactBlue = "#48a9dc";

let style = {j|
  body {
    background-color: rgb(224, 226, 229);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    background-color: white;
    color: $reasonReactBlue;
    box-shadow: 0 0 0 1px $reasonReactBlue;
    border: none;
    padding: 8px;
    font-size: 16px;
  }
  button:active {
    background-color: $reasonReactBlue;
    color: white;
  }
  .container {
    margin: 12px 0px;
    box-shadow: 0px 4px 16px rgb(200, 200, 200);
    width: 720px;
    border-radius: 12px;
    font-family: sans-serif;
  }
  .containerTitle {
    background-color: rgb(242, 243, 245);
    border-radius: 12px 12px 0px 0px;
    padding: 12px;
    font-weight: bold;
  }
  .containerContent {
    background-color: white;
    padding: 16px;
    border-radius: 0px 0px 12px 12px;
  }
  textarea {
    width: calc(100% - 16px);
    background-color: #1E1E1E;
    border-radius: 4px;
    color: #D4D4D4;
    font-size: 16px;
    padding: 8px;
    margin-top: 8px;
  }
|j};
