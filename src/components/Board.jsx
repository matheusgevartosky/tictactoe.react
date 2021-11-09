import  { useContext, useEffect } from "react";
import { GameContext } from "../Context/GameContext";
import  Square from "./Square";
import Player from "./Player";
import Reset from "./Reset";
import { v4 as uuid} from "uuid";
import calculateWinner from "../utils/CalculateWinner";
import Winner from "./Winner";
import History from "./History";

export default function Board(){
    const { squares, setWinner, history } = useContext(GameContext);

    useEffect(() => {
        const winner = calculateWinner(squares);
        if(winner){
            setWinner(winner);
        }
        console.log(history);
    }, [setWinner,squares]);

    return (
        <div className="boardcontainer">
            <Player />
            <Winner />
            <Reset />
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} key={uuid()}/>
                ))}
            </div>
            <History />
        </div>
    )

}

