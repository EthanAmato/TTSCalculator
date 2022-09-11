import React from "react";
import style from "../css/style.css"

function Button(props){
    return (
        <button className="numberButton" onClick={props.onClick}>
          {props.value}
        </button>
      );
}

function Buttons(props) {
    function renderButton(i){
        if (i==="="){
            return (
                <Button
                    value={i} //uses the props that are inherited from Display
                    onClick={() => props.onEquals(props.ex)}
                />
            );
        } else {
            return (
                <Button
                    value={i} //uses the props that are inherited from Display
                    onClick={() => props.onClick(i)}
                />
                );
            }
    }
  return (
    <div class="button-container">
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
