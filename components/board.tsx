import React from "react";
import { Alphabet, UpdateSolverStateProps } from "~/components/solver.tsx";

function stringToAlphabetSet(value: string) {
  const chars = new Set<Alphabet>();
  for (let i = 0; i < value.length; i++) {
    chars.add(value.charAt(i).toUpperCase() as Alphabet);
  }
  return chars;
}

function onTextChangeFactory(
  type: "include" | "exclude",
  handler: (props: UpdateSolverStateProps) => void,
  index?: number,
) {
  return (e: React.FormEvent<HTMLInputElement>) => {
    handler({
      chars: stringToAlphabetSet(e.currentTarget.value),
      type: type,
      index: index,
    });
  };
}

function RowChar(
  index: number,
  handler: (props: UpdateSolverStateProps) => void,
) {
  return (
    <div className="row" data-row-type="char" data-row-index={index}>
      <div className="tile tile-no">{index + 1}</div>
      <div className="tile tile-include">
        <input
          type="text"
          onChange={onTextChangeFactory("include", handler, index)}
        />
      </div>
      <div className="tile tile-exclude">
        <input
          type="text"
          onChange={onTextChangeFactory("exclude", handler, index)}
        />
      </div>
    </div>
  );
}

function RowAny(handler: (props: UpdateSolverStateProps) => void) {
  return (
    <div className="row" data-row-type="any">
      <div className="tile tile-no">ANY</div>
      <div className="tile tile-include">
        <input type="text" onChange={onTextChangeFactory("include", handler)} />
      </div>
      <div className="tile tile-exclude">
        <input type="text" onChange={onTextChangeFactory("exclude", handler)} />
      </div>
    </div>
  );
}

export default function Board(
  { handler }: { handler: (props: UpdateSolverStateProps) => void },
) {
  let rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(RowChar(i, handler));
  }
  return (
    <div id="board">
      {RowAny(handler)}
      {rows}
    </div>
  );
}
