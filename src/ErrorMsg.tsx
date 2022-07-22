import { FunctionComponent } from "react";
import styles from "./ErrorMsg.module.css";

interface ErrMsgProps {
  message: string;
  className?: string;
}

const ErrMsg: FunctionComponent<ErrMsgProps> = (props) => {
  return (
    <div>
      <h1 className={props.className}>{props.message}</h1>;
      <h2 className={styles.yellowBg}>With Yellow BG</h2>
    </div>
  );
};

export default ErrMsg;
