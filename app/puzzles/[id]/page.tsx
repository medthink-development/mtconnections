"use client";

import {useState, useEffect} from "react";
import {Puzzle} from "@/app/_modules/Puzzle";

interface PuzzlePageProps {
  params: Promise<{ id: string }>;
}

export default function PuzzlePage({params}: PuzzlePageProps) {
  const [id, setId] = useState<string>('');

  useEffect(() => {
    // grab the id parameter from the URL
    async function getPuzzleId() {
      const id = (await params).id;
      setId(id);
    }

    getPuzzleId();
  }, [params])


  return id ? <Puzzle id={id}/> : <p>loading...</p>;
}