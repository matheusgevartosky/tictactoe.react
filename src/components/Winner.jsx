import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

export default function Winner(){
    const { winner } = useContext(GameContext);

    return (
        <div className="winner">
            {winner ? <h1>{winner} venceu o jogo!</h1> : null}
        </div>

    )

}

