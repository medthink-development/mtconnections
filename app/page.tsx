"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // Use useEffect to ensure this runs on the client-side after component mounts
  useEffect(() => {
    router.push("/puzzles/1");
  }, [router]);

  return <p>Home</p>;
}