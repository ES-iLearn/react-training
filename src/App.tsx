import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrMsg from "./ErrorMsg";

function App() {
  const name = "John McClane";
  const greetings = <h1>Hola "{name}"!</h1>;
  const blueStyle = { color: "blue" };
  let invalid = false;
  let errMsg = invalid && <h1 className="invalid">Error message</h1>;

  return (
    <div className="App">
      {greetings}
      <h2 style={blueStyle}>Hello</h2>
      {errMsg}
      <ErrMsg message="Sample message" className="invalid"></ErrMsg>
    </div>
  );

  // document.createElement()

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", {}, "Hello there"),
  //   React.createElement("h2", {}, "Second heading")
  // );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Main title</h1>
//         <h2>Hello</h2>
//       </div>
//     );
//   }
// }

export default App;
