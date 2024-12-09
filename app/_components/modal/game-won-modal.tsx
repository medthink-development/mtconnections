import { usePathname, useRouter } from "next/navigation";
import { Word } from "@/app/_types";
import ControlButton from "../button/control-button";
import GuessHistory from "../guess-history";
import GameModal from "./game-modal";
import { Caveat, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

type GameWonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  guessHistory: Word[][];
  perfection: string;
};

export default function GameWonModal(props: GameWonModalProps) {
  const router = useRouter();

  //get path
  const currentPath = usePathname();
  console.log('currentPath', currentPath)

  //get puzzle number
  const currentPuzzle = currentPath ? parseInt(currentPath.split('/')[2]) : null;
  console.log('currentPuzzle', currentPuzzle)


  // Calculate nextPuzzle
  const nextPuzzle =
    currentPuzzle !== null && currentPuzzle < 3 ? currentPuzzle + 1 : null;
    console.log('nextPuzzle out', router?.pathname)

  const handleNextGame = () => {
    if (router && nextPuzzle) {
      console.log('nextPuzzle', nextPuzzle)
      router.push(`/puzzles/${nextPuzzle}`);
    }
  };

  return (
<GameModal isOpen={props.isOpen} onClose={props.onClose}>
  <div className="flex flex-col items-center justify-center px-12">
    <h1 className={`text-[#01426a] text-6xl font-black my-4 ml-4 ${caveat.className}`}>
      {props.perfection}
    </h1>
    <hr className="mb-2 md:mb-4 w-full"></hr>
    <h2 className="text-black mb-8">{"You've won the game!"}</h2>
    <GuessHistory guessHistory={props.guessHistory} />
    <div className="flex space-x-4">
      {nextPuzzle && (
        <ControlButton
          className=""
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