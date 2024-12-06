"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/puzzles/1")
  return (
    <p>Home</p>
  );
}