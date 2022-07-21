import { FunctionComponent } from "react";

interface ErrMsgProps {
  message: string;
  className: string;
}

const ErrMsg: FunctionComponent<ErrMsgProps> = (props) => {
  return <h1 className={props.className}>{props.message}</h1>;
};

export default ErrMsg;
