import { Word } from "@/app/_types";
import ControlButton from "../button/control-button";
import { usePathname, useRouter } from "next/navigation";
import GuessHistory from "../guess-history";
import GameModal from "./game-modal";
import { Caveat, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

type GameLostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  guessHistory: Word[][];
};

export default function GameLostModal(props: GameLostModalProps) {

  const router = useRouter();

  //get path
  const currentPath = usePathname();


  //get puzzle number
  const currentPuzzle = currentPath ? parseInt(currentPath.split('/')[2]) : null;


  // Calculate nextPuzzle
  const nextPuzzle =
    currentPuzzle !== null && currentPuzzle < 3 ? currentPuzzle + 1 : null;


  const handleNextGame = () => {
    if (router && nextPuzzle) {

      router.push(`/puzzles/${nextPuzzle}`);
    }
  };


  
  return (
    <GameModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="flex flex-col items-center justify-center px-12">
      <h1 className={`text-[#01426a] text-6xl font-black my-4 ml-4 ${caveat.className}`}>
          {"Next time!"}
        </h1>
        <hr className="mb-2 md:mb-4 w-full"></hr>
        <GuessHistory guessHistory={props.guessHistory} />
        <div className="flex space-x-4">
        {nextPuzzle && (
        <ControlButton
          text="Play Next Puzzle"
          onClick={handleNextGame}
        />
      )}
        <ControlButton text="Exit" onClick={props.onClose} />
        </div>
      </div>
    </GameModal>
  );
}
