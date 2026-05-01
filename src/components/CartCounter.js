import { useState } from "react";


const CartCounter = () => {
    //state variable
    const[value,setValue] = useState(1);
    const incrementCounter=() =>{
        if(value >= 20) return;        setValue(value+1);
    }
    const decrementCounter=() =>{
        if(value<1)return;
        setValue(value-1);
    }
    const incrementButtonProps = value >= 20 ? {disabled:true} : {onClick:incrementCounter}
        const decrementButtonProps = value <= 1 ? {disabled:true} : {onClick:decrementCounter}

    return(
        <>
        <button {...incrementButtonProps}>+</button>
        <h3>{value}</h3>
        <button {...decrementButtonProps}>-</button>
        </>
    )
};
export default CartCounter;