import react from "react";
import GameContextProvider from "../Context/GameContext";
import Board from "../components/Board";
import "./Home.css"

export default function Home() {
  return (
    <GameContextProvider>
        <Board />
    </GameContextProvider>
  );
}