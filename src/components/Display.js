import React from "react";
import Buttons from "./Buttons";
import {evaluate} from "mathjs";



function Display(props) {
    let [expression, setExpression] = React.useState("");
    let [display, setDisplay] = React.useState("");
    
    
    function handleClick(i){
        console.log(i);
        setDisplay(display+i);
    }

    function handleMath(expression){
        return (evaluate(expression));
    }
    return (
    <div>
        <h1>{display}</h1>
        <Buttons onClick = {handleClick} onEquals = {handleMath(expression)} />
    </div>
    );
}

export default Display;
