import  { createContext, useState }  from "react";

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setisXNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [history, setHistory] = useState([]);
    const state ={
        squares,
        setSquares,
        isXNext,
        setisXNext,
        winner,
        setWinner,
        history,
        setHistory
    }
    return (
        <GameContext.Provider value={ state } >
            { children }
        </GameContext.Provider>
    );
}