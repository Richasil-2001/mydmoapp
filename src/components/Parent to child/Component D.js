import { useContext } from "react";
import { userContext } from "../../App";
const ComponentD =() => {
        const isReadOnly= useContext(userContext);
    
    return(
        <div>
            <h1>
            This is component D
            </h1>
            <button disabled={isReadOnly}>Click me</button>
        </div>
    );
}
export default ComponentD;