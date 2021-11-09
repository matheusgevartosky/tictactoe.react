import  { useContext } from "react";
import { GameContext } from "../Context/GameContext";

export default function Square({ value, index, }) {
    const { squares, setSquares, isXNext, setisXNext, winner, setHistory, history } = useContext(GameContext);

    function handleClick() {
        if (squares[index] || value) return;
        if (winner || value) return;

        

        const newSquares = [...squares];
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setisXNext(!isXNext);

        setHistory([
            ...history,
            {
                squares: [...newSquares],
                isXNext: !isXNext,
            }
        ])
    }

    return (
        <button type="button" onClick={handleClick}>{value}</button>
    )

}

