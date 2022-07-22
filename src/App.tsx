import React from "react";
import "./App.css";
import ErrMsg from "./ErrorMsg";
import NewComp from "./NewComp";
import StateDemo from "./StateDemo";

function App() {
  const name = "John McClane";
  const greetings = <h1>Hola "{name}"!</h1>;
  const blueStyle = { color: "blue" };
  let invalid = false;
  let errMsg = invalid && <h1 className="invalid">Error message</h1>;

  const bugs = [
    {title: 'Bug 1', status: 'new'},
    {title: 'Bug 2', status: 'new'},
    {title: 'Bug 3', status: 'new'},
  ];

  function newChangeHandler() {
    console.log("Change triggered in App.tsx")
  }


  return (
    <div className="App">

      <StateDemo></StateDemo>

<hr />
      {greetings}
      <h2 style={blueStyle}>Hello</h2>
      <h2 className="yellowBg">Yellow From App </h2>
      {errMsg}
      <ErrMsg message="Sample message"></ErrMsg>
      <NewComp bugs={bugs} changeHandler={newChangeHandler}></NewComp>
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
