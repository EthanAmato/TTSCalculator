import React from "react";
import Buttons from "./Buttons";



function Display(props) {
    const [expressionOne, setexpressionOne] = React.useState(0.0);
    //expressionOne is responsible 4 storing first value a user
    //wants to do calculations with
    const [display, setDisplay] = React.useState("0");
    //Simply what the h1 is displaying to the user
    const [isOperating, setIsOperating] = React.useState(false);
    //A boolean state that indicates whether or not an operator button has been pressed
    const [currentOperator, setCurrentOperator] = React.useState("");
    //A way to store which type of operation the calculator will do

    function handleClick(i){
        function updateDisplay(buttonInput){
            if("+-x\u00F7".includes(buttonInput)){
                setCurrentOperator(buttonInput);
                setIsOperating(true);
                setDisplay("0")
                return;
            } else {

            switch(buttonInput){ //8
                case "0": //'8' === '0'
                    if(display === "0"){
                        setDisplay("0");
                    } else{
                        setDisplay(display+buttonInput);
                    }
                    break;
                case ".": //'8' === '.'
                    if(display.includes(".")){
                        setDisplay(display)
                    } else{
                        setDisplay(display+buttonInput)
                    }
                    break;
                default: //else
                    if(display === "0"){
                        setDisplay(buttonInput);
                    } else{
                        setDisplay(display+buttonInput);
                    }
                    break;
                } 
            }
        }

        if(!isOperating) {
            updateDisplay(i);
            setexpressionOne(parseFloat(display))
        } else {
            updateDisplay(i)
        }    
    }


    function handleMath(expression, op){ //5.0, '+'
        switch(op) {
            case "+":
                setDisplay(expression+parseFloat(display)); //5.0 + 60.0
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
        setIsOperating(false);
        setCurrentOperator("")
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
                                              setexpressionOne(0.0)
                                              setIsOperating(false)
                                              }} 
                             mathExpressions = {expressionOne} //5.0
                             currentOp ={currentOperator} //'+' '-' 'x' '\u00F7'
                    />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Display;
