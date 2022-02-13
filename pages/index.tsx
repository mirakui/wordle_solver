import { useDeno } from "aleph/react";
import React from "react";
import Solver from "~/components/solver.tsx";

export default function Home() {
  return (
    <div className="page">
      <head>
        <title>Word Puzzle Solver</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <Solver />
    </div>
  );
}
