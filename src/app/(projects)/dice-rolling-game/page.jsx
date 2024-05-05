"use client";
import MyButton from "@/src/components/MyButton";
import Image from "next/image";
import {useEffect, useState} from "react";
import dice1 from "/src/app/(projects)/dice-rolling-game/img/dice1.png";
import dice2 from "/src/app/(projects)/dice-rolling-game/img/dice2.png";
import dice3 from "/src/app/(projects)/dice-rolling-game/img/dice3.png";
import dice4 from "/src/app/(projects)/dice-rolling-game/img/dice4.png";
import dice5 from "/src/app/(projects)/dice-rolling-game/img/dice5.png";
import dice6 from "/src/app/(projects)/dice-rolling-game/img/dice6.png";
import diceStart from "/src/app/(projects)/dice-rolling-game/img/dicestart.png";

function DiceRollingGame() {
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerOneVis, setPlayerOneVis] = useState(false);
  const [playerTwoName, setPlayerTwoName] = useState("Player Two");
  const [playerTwoVis, setPlayerTwoVis] = useState(false);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [header, setHeader] = useState("WELCOME TO THE GAME FOR AGES");

  const imageArray = [diceStart, dice1, dice2, dice3, dice4, dice5, dice6];

  function playerOneButton() {
    const playerOneInput = document.getElementById("playerOneInput");
    setPlayerOneName(playerOneInput.value);
    setPlayerOneVis(true);
  }

  function playerTwoButton() {
    const playerTwoInput = document.getElementById("playerTwoInput");
    setPlayerTwoName(playerTwoInput.value);
    setPlayerTwoVis(true);
  }

  function roll() {
    setPlayerOneScore(Math.floor(Math.random() * 6) + 1);
    setPlayerTwoScore(Math.floor(Math.random() * 6) + 1);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (playerOneScore === 0) {
    } else {
      if (playerOneScore > playerTwoScore) {
        setHeader("Player ONE crushed Player TWO");
      } else if (playerTwoScore > playerOneScore) {
        setHeader("Player TWO showed no mercy to Player ONE");
      } else {
        setHeader("Kardeşlik kazandı");
      }
    }
  }, [playerOneScore]);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-400 to-amber-600 gap-6">
        <h1 className="text-6xl font-bold text-center">{header}</h1>
        <h3 className="text-2xl font-bold text-center">
          Click Roll to Decide Who will be the Winner
        </h3>
        <div className="flex gap-6">
          <div
            className={`flex flex-col items-center gap-3 ${
              playerOneVis ? "invisible" : ""
            }`}
          >
            <h4 className="text-xl font-bold">Player One</h4>
            <input
              className="rounded-md w-40 h-8"
              type="text"
              id="playerOneInput"
            />
            <button
              type={"button"}
              onClick={playerOneButton}
              className="w-16 h-8 rounded-md bg-red-700 text-white hover:text-black duration-700 text-sm"
            >
              Submit
            </button>
          </div>
          <div
            className={`flex flex-col items-center gap-3  ${
              playerTwoVis ? "invisible" : ""
            }`}
          >
            <h4 className="text-xl font-bold">Player Two</h4>
            <input
              className="rounded-md w-40 h-8"
              type="text"
              id="playerTwoInput"
            />
            <button
              type={"button"}
              onClick={playerTwoButton}
              className="w-16 h-8 rounded-md bg-red-700 text-white hover:text-black duration-700 text-sm"
            >
              Submit
            </button>
          </div>
        </div>
        <button
          type={"button"}
          onClick={roll}
          className="w-48 h-14 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white hover:text-black duration-700 text-2xl"
        >
          Click To Roll
        </button>
        <div className="flex">
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold">{playerOneName}</h4>
            <Image
              src={imageArray[playerOneScore]}
              alt="start"
            />
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold">{playerTwoName}</h4>
            <Image
              src={imageArray[playerTwoScore]}
              alt="start"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default DiceRollingGame;
