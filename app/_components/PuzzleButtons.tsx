'use client'; // This directive ensures that the code is only executed on the client side

import { usePathname } from 'next/navigation'; // Import usePathname hook
import Link from 'next/link';

export default function PuzzleButtons() {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="flex items-center gap-4">
      {/* Tab 1: Active */}
      <Link href="/puzzles/1">
  <button
    className={`relative px-4 py-2 text-sm md:px-5 md:py-3 md:text-md font-semibold ${
      pathname === '/puzzles/1'
        ? 'text-[#005792] bg-white border border-[#005792] rounded-full z-10 after:absolute after:content-[""] after:w-0 after:h-0 after:border-l-[12px] after:border-r-[12px] after:border-t-[12px] after:border-l-transparent after:border-r-transparent after:border-t-[#005792] after:top-full after:left-1/2 after:transform after:-translate-x-1/2'
        : 'text-white bg-[#005792] rounded-full'
    }`}
  >
    Puzzle 1
  </button>
</Link>

      {/* Tab 2 */}
      <Link href="/puzzles/2">
        <button
          className={`relative px-4 py-2 text-sm md:px-5 md:py-3 md:text-md font-semibold ${
            pathname === '/puzzles/2'
  ? 'text-[#005792] bg-white border border-[#005792] rounded-full z-10 after:absolute after:content-[""] after:w-0 after:h-0 after:border-l-[12px] after:border-r-[12px] after:border-t-[12px] after:border-l-transparent after:border-r-transparent after:border-t-[#005792] after:top-full after:left-1/2 after:transform after:-translate-x-1/2'
        : 'text-white bg-[#005792] rounded-full'
          }`}
        >
          Puzzle 2
        </button>
      </Link>

      {/* Tab 3 */}
      <Link href="/puzzles/3">
        <button
          className={`relative px-4 py-2 text-sm md:px-5 md:py-3 md:text-md font-semibold ${
            pathname === '/puzzles/3'
     ? 'text-[#005792] bg-white border border-[#005792] rounded-full z-10 after:absolute after:content-[""] after:w-0 after:h-0 after:border-l-[12px] after:border-r-[12px] after:border-t-[12px] after:border-l-transparent after:border-r-transparent after:border-t-[#005792] after:top-full after:left-1/2 after:transform after:-translate-x-1/2'
        : 'text-white bg-[#005792] rounded-full'
          }`}
        >
          Puzzle 3
        </button>
      </Link>
    </div>
  );
}
