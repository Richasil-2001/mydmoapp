// //props = properties
// 1. pass props to function parameter and get props.name or props.imageLink 
// 2. destructure props in function parameter and get name and imageLink directly
import { useContext } from "react";
import { userContext } from "../App";
function Imagecard({name, imgLink}) {
    const {placeholder} = useContext(userContext);

    console.log("This is the Imagecard component");
    return (
        <>
            <h2>{name}</h2>
            <img src={imgLink} alt={`${name} - ${placeholder}`} />
        </>
    );
}

export default Imagecard;

// App.js > CardList.js > Imagecard.js
//  prop       prop         consumer 
// prop drilling = passing props from parent to child to grandchild and so on...

// A (context)   > B > C > D > E > F > G > H > I > J > K > L > M > N > O > P > Q > R > S > T > U > V > W > X > Y > Z (consume the context)
// provider                                                                                                 // consumer    
// use a context 
// context = "Tanay's Jacket" [Provider]

// context can be used in consumer component (anywhere in the component tree) using useContext hook