import react, { useContext } from "react";
import { GameContext } from "../Context/GameContext";

export default function Reset(){
    const { setSquares, setisXNext , setWinner} = useContext(GameContext);

   function handleClick(){
       setSquares(Array(9).fill(null));
       setisXNext(true);
       setWinner(null);
   }  
    return (
      <p className="reset">
          <button type="button" onClick={handleClick}>Reset</button>
      </p>
    )}