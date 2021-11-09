import react, { useContext } from "react";
import { GameContext } from "../Context/GameContext";

export default function History(){
    const {history, setHistory, setSquares, setisXNext  } = useContext(GameContext);

    function handleClick(index){
        setSquares(history[index].squares);
        setisXNext(history[index].isXNext);
    }
    return (
        <div>
            {history.map((data, index) => (
            <div className="history-container">  
                <div className="history">
                    <button type="button" onClick={() => handleClick(index)}>Voltar para jogada {index}</button>
                </div> 
            </div>   

            ))}
        </div>
    )}
