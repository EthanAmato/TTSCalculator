import React from "react";
import Buttons from "./Buttons";



function Display(props) {
    const [expressionOne, setexpressionOne] = React.useState(0.0);
    const [expressionTwo, setexpressionTwo] = React.useState(0.0);


    const [display, setDisplay] = React.useState("0");
    const [isOperating, setIsOperating] = React.useState(false);
    const [currentOperator, setCurrentOperator] = React.useState("");

    function handleClick(i){
        function updateDisplay(buttonInput){
            if("+-x\u00F7".includes(i)){
                setCurrentOperator(i);
                setIsOperating(true);
                setDisplay("0")
                return;
            } else {

            switch(buttonInput){
                case "0":
                    if(display === "0"){
                        setDisplay("0");
                    } else{
                        setDisplay(display+buttonInput);
                    }
                    break;
                case ".":
                    if(display.includes(".")){
                        setDisplay(display)
                    } else{
                        setDisplay(display+buttonInput)
                    }
                    break;
                default:
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
            setexpressionOne(parseFloat(display))
            updateDisplay(i);
            console.log(parseFloat(display))

        } else {
            updateDisplay(i)
        }    
    }


    function handleMath(expressions, op){
        switch(op) {
            case "+":
                setDisplay(expressions[0]+parseFloat(display));
                break;
            case "-":
                setDisplay(expressions[0]-parseFloat(display))
                break;
            case "x":
                setDisplay(expressions[0]*parseFloat(display))
                break;
            case "\u00F7":
                setDisplay(expressions[0]/parseFloat(display))
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
                                              setexpressionTwo(0.0)}} 
                             mathExpressions = {[expressionOne,expressionTwo]}
                             currentOp ={currentOperator}
                    />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Display;
