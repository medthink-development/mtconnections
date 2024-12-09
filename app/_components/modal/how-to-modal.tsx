import GameModal from "./game-modal";
import { Caveat, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

type HowToModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HowToModal(props: HowToModalProps) {
  return (
    <GameModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="relative flex flex-col items-center justify-center">
        {/* Close Button */}
        <button
          onClick={props.onClose}
          className="absolute top-0 right-0 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ✖
        </button>

        <div className="text-black max-w-4xl mx-auto">
         
          <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex items-center text-lg font-medium flex-grow mb-6 md:mb-0">
            <div className="flex flex-col">
          <h2 className={`text-[#005792] text-6xl font-bold mb-4 ${caveat.className} `}>How to play</h2>
  <p>
    The objective of <span className="font-bold">MedThink Connections</span> is to group the words that share a common connection.
  </p>
  </div>
</div>
            <div className="hidden md:block border-l border-white"></div>
            <div className="flex-grow">
              <ol className="list-decimal mt-6 mb-6 list-inside text-lg leading-relaxed space-y-4">
                <li>
                  <span className="font-semibold">Start the puzzle.</span> Select a puzzle
                  mascot (penguin, snowman, tree) to begin.
                </li>
                <li>
                  <span className="font-semibold">Identify connections.</span> Look at the
                  grid to group the 16 words into 4 sets of 4 words. Each set should
                  share a common theme or connection. You may notice some overlap
                  between groups—focus on the clearest connections, e.g., synonyms,
                  categories, or word associations.
                </li>
                <li>
                  <span className="font-semibold">Adjust your selections.</span> Use the
                  shuffle or deselect buttons below the puzzle to rearrange or change
                  your groupings, if needed.
                </li>
                <li>
                  <span className="font-semibold">Submit your grouping.</span> Once you're
                  confident in a grouping, hit Submit.
                  <ul className="list-disc list-inside ml-5 mt-2 text-base">
                    <li>If you are correct, move on to the next grouping.</li>
                    <li>If you are incorrect, your mistake will be recorded (4 mistakes allowed in total).</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Review the solution.</span> After
                  submitting your final grouping, you will see the “answer key” showing
                  the categories and connections.
                </li>
                <li>
                  <span className="font-semibold">Move on to the next puzzle</span> (or try
                  this one again).
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </GameModal>
  );
}
