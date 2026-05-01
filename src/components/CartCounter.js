import { useState } from "react";


const CartCounter = () => {
    //state variable
    const[value,setValue] = useState(1);
    const incrementCounter=() =>{
        if(value >= 20) return;
        setValue(value+1);
    }
    const decrementCounter=() =>{
        if(value<1)return;
        setValue(value-1);
    }
    return(
        <>
        {value>=20? <button disabled>+</button> : <button onClick={incrementCounter}>+</button>}
        <h3>{value}</h3>
        {value<=1?<button disabled>-</button> :<button onClick={decrementCounter}>-</button>}
        </>
    )
};
export default CartCounter;