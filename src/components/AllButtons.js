import React from 'react'
import Buttons from '../Buttons'

function AllButtons() {

    const btnValues = [
        ["CE", "", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ];
    

  return (
    <div className="button-box">
      {btnValues.flat().map((btn, i) => {
        return (
          <Buttons
            key={i}
            className={
                btn === "=" ? "equals" 
                : btn === "" ? "none"
                : btn === "/" ? "button pink"
                : btn === "X" ? "button pink"
                : btn === "-" ? "button pink"
                : btn === "+" ? "button pink"
                : "button grey"
            }
            value={btn}
            handleClick={() => console.log(`${btn} you clicked me`)}
          />
        );
      })}
      
    </div>
  );
}

export default AllButtons