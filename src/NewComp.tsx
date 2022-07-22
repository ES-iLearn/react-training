import { FunctionComponent } from "react";
import styles from "./NewComp.module.css";


interface Bug {
    title: string;
}

interface NewCompProp{
    bugs: Bug[];
    changeHandler: Function;
}

const NewComp: FunctionComponent<NewCompProp> = (props) => {

  const people = [{ name: "John" }, { name: "Neo" }, { name: "Matt" }];

  function handler() {
    props.changeHandler();
  }


  return (
    <div>
      <h2 className={styles.yellowBg}>From New Comp</h2>

      {people.map((person) => {
        return <div>{person.name}</div>;
      })}

      {props.bugs.map(function (bug: any) {
        return <h1>{bug.title}</h1>;
      })}

      <button onClick={handler}>Click Me!</button>
    </div>
  );
};

export default NewComp;
