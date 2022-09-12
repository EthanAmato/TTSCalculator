import React from "react";

function Button(props){
    return (
        <button className={"numberButton btn btn-secondary"} onClick={props.onClick} id = {"buttonId"+props.buttonId}>
          {props.value}
        </button>
      );
}

function Buttons(props) {
    function renderButton(i){
        
        switch(i) {
            case "=":
            return (
                <Button
                    value={i} //uses the props that are inherited from Display
                    onClick={()=> props.onEquals(props.mathExpressions, props.currentOp)}
                    buttonId = {"Equals"}
                />);
            break;
            case "Clear":
                return (
                    <Button
                        value={i} //uses the props that are inherited from Display
                        onClick={() => props.onClear()}
                        buttonId = {i}
                    />);
                break;
            case "+":
                return (
                    <Button
                        value={i} //uses the props that are inherited from Display
                        onClick={() => props.onClick(String(i))}
                        buttonId = {"Plus"}
                    />);
                break;
            case "-":
                return (
                    <Button
                        value={i} //uses the props that are inherited from Display
                        onClick={() => props.onClick(String(i))}
                        buttonId = {"Minus"}
                    />);
                break;
            case "x":
                return (
                    <Button
                        value={i} //uses the props that are inherited from Display
                        onClick={() => props.onClick(String(i))}
                        buttonId = {"Multiply"}
                    />);
                break;
            case "\u00F7":
                return (
                    <Button
                        classNames={{'col-md-4': true}}
                        value={i} //uses the props that are inherited from Display
                        onClick={() => props.onClick(String(i))}
                        buttonId = {"Divide"}
                    />);
                break;
            case ".":
                return (
                    <Button
                        value={i} //uses the props that are inherited from Display
                        onClick={() => props.onClick(String(i))}
                        buttonId = {"Dot"}
                    />);
                break;
         default: 
            return (
                <Button
                    value={i} //uses the props that are inherited from Display
                    onClick={() => props.onClick(String(i))}
                    buttonId = {i}
                />
                );
            break;
        }
    }
  return (
    
    <div className="button-container">
        <div className="top-row">
            {renderButton("Clear")}
            {renderButton("\u00F7")}
        </div>
        <div className="middle-row">
            {renderButton(7)}
            {renderButton(8)}
            {renderButton(9)}
            {renderButton("x")}
        </div>
        <div className="middle-row">
            {renderButton(4)}
            {renderButton(5)}
            {renderButton(6)}
            {renderButton("-")}
        </div>
        <div className="middle-row">
            {renderButton(1)}
            {renderButton(2)}
            {renderButton(3)}
            {renderButton("+")}
            
        </div>
        <div className="bottom-row">
            {renderButton(0)}
            {renderButton(".")}
            {renderButton("=")}
        </div>
    </div>
  );
}

export default Buttons;
