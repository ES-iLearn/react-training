import { FunctionComponent, useState } from "react";

interface StateDemoProps {}

const StateDemo: FunctionComponent<StateDemoProps> = (props) => {
  const [name, setName] = useState("Matt");

  function change() {
    setName("John");
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={change}>Click to change name!</button>
    </div>
  );
};

export default StateDemo;
