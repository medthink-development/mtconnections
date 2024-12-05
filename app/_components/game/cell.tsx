"use client";

import { Word } from "@/app/_types";

type CellProps = {
  cellValue: Word;
  onClick: (word: Word) => void;
  animateGuess: boolean;
  animateWrongGuess: boolean;
};

export default function Cell(props: CellProps) {
  const bgColor = props.cellValue.selected ? "bg-[#b0c5ff]" : "bg-white";
  const textColor = props.cellValue.selected ? "text-black" : "text-[#2f75af]";
  const borderColor = props.cellValue.selected ? "border-[#009cde]" : "border-[#009cde]";

  const handleClick = () => {
    props.onClick(props.cellValue);
  };

  const guessAnimation = props.animateGuess ? "transform -translate-y-2" : "";
  const wrongGuessAnimation = props.animateWrongGuess
    ? "animate-horizontal-shake"
    : "";

  return (
    <button
      className={`${bgColor} ${borderColor} border py-6 rounded-md break-all px-1 transition ease-in-out ${guessAnimation} ${wrongGuessAnimation}`}
      onClick={handleClick}
    >
      <h2 className={`${textColor} text-xs md:text-sm text-center font-bold`}>
        {props.cellValue.word.toUpperCase()}
      </h2>
    </button>
  );
}
