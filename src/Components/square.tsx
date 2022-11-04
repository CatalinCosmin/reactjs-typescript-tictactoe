import { useState } from "react";

export const Square = (props: { val: number; squares: string[];  setSquares: (arg0: any) => void; xNext: boolean; setNext: (arg0: any) => void; }) => {
    const [value, setValue] = useState("");
    
    return (
        <div>
            <button className="square"
                    onClick={() => {
                        const slicedSquares = props.squares.slice();
                        slicedSquares[props.val] = props.xNext ? "X" : "O";
                        props.setSquares(slicedSquares);
                        setValue(props.xNext ? "X" : "O");
                        props.setNext(!props.xNext)
                    } }>
                {value}
            </button>
        </div>
        
    );
}