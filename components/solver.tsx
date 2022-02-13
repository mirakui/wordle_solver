import React, { useState } from "react";
import Board from "~/components/board.tsx";
import Candidates from "~/components/candidates.tsx";
import { DictionaryWords } from "~/components/dictionary_words.tsx";

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
  chars_included_any: Set<Alphabet>;
  chars_excluded_any: Set<Alphabet>;
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

function differenceSet<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  return new Set<T>(
    [...setA].filter((e) => (!setB.has(e))),
  );
}

function createRegExpFromSolverState(
  state: SolverState,
): (word: string) => boolean {
  const whole_excluded = differenceSet(AllAlphabets, state.chars_excluded_any);

  let regexpString = "^";
  for (let i = 0; i < 5; i++) {
    let alphabetSet: Set<Alphabet>;
    if (state.chars_included[i].size > 0) {
      alphabetSet = state.chars_included[i];
    } else {
      alphabetSet = differenceSet(whole_excluded, state.chars_excluded[i]);
    }
    regexpString += "[" + [...alphabetSet].join("") + "]";
  }
  regexpString += "$";
  const regexp = new RegExp(regexpString);

  const filter = (word: string) => {
    if (!word.match(regexp)) {
      return false;
    }
    for (let char of state.chars_included_any) {
      if (word.indexOf(char) < 0) {
        return false;
      }
    }
    return true;
  };

  return filter;
}

function searchWordsFromDictionary(state: SolverState): string[] {
  const filter = createRegExpFromSolverState(state);
  const filteredWords = [...DictionaryWords].filter(filter);
  if (filteredWords.length == DictionaryWords.length) {
    return [];
  } else {
    return filteredWords;
  }
}

export default function Solver() {
  let initialState: SolverState = {
    chars_included_any: new Set<Alphabet>(),
    chars_excluded_any: new Set<Alphabet>(),
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
  const [candidatesState, setCandidatesState] = useState(new Array<string>());
  const updateSolverState = (props: UpdateSolverStateProps) => {
    if (typeof (props.index) == "number") {
      if (props.type == "include") {
        solverState.chars_included[props.index] = props.chars;
      } else {
        solverState.chars_excluded[props.index] = props.chars;
      }
    } else {
      if (props.type == "include") {
        solverState.chars_included_any = props.chars;
      } else {
        solverState.chars_excluded_any = props.chars;
      }
    }
    const candidateWords = searchWordsFromDictionary(solverState);
    setCandidatesState(candidateWords);
    setSolverState(solverState);
  };
  return (
    <>
      <Board handler={updateSolverState} />
      <Candidates words={candidatesState} />
    </>
  );
}
