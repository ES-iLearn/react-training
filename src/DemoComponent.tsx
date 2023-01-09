import { FunctionComponent } from "react";

interface DemoProps {
    title: string;
    styleName?: string;
}
 
const Demo: FunctionComponent<DemoProps> = (props) => {
    return ( <h1>{props.title}</h1> );
}
 
export default Demo;
