import react, { useContext } from "react";
import { GameContext } from "../Context/GameContext";

export default function Player(){
    const {isXNext} = useContext(GameContext);

    return (
        <div className="player">
            <div className="player-name">
                <h1>Player: {isXNext ? "X" : "O"}  </h1> 
            </div>
        </div>
    )

}

