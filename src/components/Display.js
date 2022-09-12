import React from "react";
import Buttons from "./Buttons";
import {evaluate} from "mathjs";



function Display(props) {
    let [expression, setExpression] = React.useState(0.0);
    let [display, setDisplay] = React.useState("0");
    let [isOperating, setIsOperating] = React.useState(false);
    let [currentOperator, setCurrentOperator] = React.useState("");

    function handleClick(i){
        if(isOperating){
            setDisplay(i);
            setExpression(parseFloat(display))
            setIsOperating(false);
        } else {
            if("+-x\u00F7".includes(i)) {
                console.log(i)
                setCurrentOperator(i);
                setIsOperating(true);
                return;
            }
            switch(i){
                case "0":
                    if(display === "0"){
                        setDisplay("0");
                    } else{
                        setDisplay(display+i);
                    }
                    break;
                case ".":
                    if(display.includes(".")){
                        console.log(!display.includes("."))
                        setDisplay(display)
                    } else{
                        setDisplay(display+i)
                    }
                    break;
                default:
                    if(display === "0"){
                        setDisplay(i);
                    } else{
                        setDisplay(display+i);
                    }
                    break;
            }
            setExpression(parseFloat(display))
            setIsOperating(false);
        }
    }


    function handleMath(expression, op){
        console.log(expression)
        console.log(op)
        console.log(parseFloat(display))
        switch(op) {
            case "+":
                setDisplay(expression+parseFloat(display));
                break;
            case "-":
                setDisplay(expression-parseFloat(display))
                break;
            case "x":
                setDisplay(expression*parseFloat(display))
                break;
            case "\u00F7":
                setDisplay(expression/parseFloat(display))
                break;
        }
    }
    return (
    <div className="container-fluid outer">
        <div className="container-fluid inner">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className = "display">{display}</h1>
                </div>
            </div>    
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Buttons onClick = {handleClick} 
                             onEquals = {handleMath} 
                             onClear = {()=> {setDisplay("0")
                                              setExpression(0.0)}} 
                             mathExpression = {expression}
                             currentOp ={currentOperator}
                    />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Display;
