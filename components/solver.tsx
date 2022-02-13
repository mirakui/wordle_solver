import React, { useRef, useState } from "react";
import Board from "~/components/board.tsx";
import Candidates from "~/components/candidates.tsx";

export type Alphabet =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

const AllAlphabets = new Set<Alphabet>([
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]);

type SolverState = {
  chars_included_all: Set<Alphabet>;
  chars_excluded_all: Set<Alphabet>;
  chars_included: [
    Set<Alphabet>,
    Set<Alphabet>,
    Set<Alphabet>,
    Set<Alphabet>,
    Set<Alphabet>,
  ];
  chars_excluded: [
    Set<Alphabet>,
    Set<Alphabet>,
    Set<Alphabet>,
    Set<Alphabet>,
    Set<Alphabet>,
  ];
};

export type UpdateSolverStateProps = {
  chars: Set<Alphabet>;
  type: "include" | "exclude";
  index?: number;
};

function createRegExpFromSolverState(state: SolverState) {
  let i = 0;
  let alphabetSet: Set<Alphabet>;
  if (state.chars_included[i].size > 0) {
    alphabetSet = state.chars_included[i];
  } else {
  }
}

export default function Solver() {
  let initialState: SolverState = {
    chars_included_all: new Set<Alphabet>(),
    chars_excluded_all: new Set<Alphabet>(),
    chars_included: [
      new Set<Alphabet>(),
      new Set<Alphabet>(),
      new Set<Alphabet>(),
      new Set<Alphabet>(),
      new Set<Alphabet>(),
    ],
    chars_excluded: [
      new Set<Alphabet>(),
      new Set<Alphabet>(),
      new Set<Alphabet>(),
      new Set<Alphabet>(),
      new Set<Alphabet>(),
    ],
  };
  const [solverState, setSolverState] = useState(initialState);
  const updateSolverState = (props: UpdateSolverStateProps) => {
    if (typeof (props.index) == "number") {
      if (props.type == "include") {
        solverState.chars_included[props.index] = props.chars;
      } else {
        solverState.chars_excluded[props.index] = props.chars;
      }
    } else {
      if (props.type == "include") {
        solverState.chars_included_all = props.chars;
      } else {
        solverState.chars_excluded_all = props.chars;
      }
    }
    console.log({ solverState: solverState });

    setSolverState(solverState);
  };
  return (
    <>
      <Board handler={updateSolverState} />
      <Candidates words={["HELLO", "WORLD"]} />
    </>
  );
}
