"use client";
import HowToModal from "@/app/_components/modal/how-to-modal";
import { useState } from "react";
import { Caveat, Inter } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

export default function HowToButton() {
  const [showHowToModal, setShowHowToModal] = useState(false);

  return (
    <>
      <button
        className="flex items-center space-x-2 button button--how-to"
        onClick={() => setShowHowToModal(true)}
      >
        <div className={`text-black text-xl font-semibold`}>
          How to play
        </div>
        <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full text-black font-bold text-2xl">
          ?
        </div>
      </button>
      {showHowToModal && (
        <HowToModal isOpen={showHowToModal} onClose={() => setShowHowToModal(false)} />
      )}
    </>
  );
}
