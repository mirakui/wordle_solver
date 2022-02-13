import React from "react";

function RowChar({ index }: { index: number }) {
  return (
    <div className="row" data-row-type="char" data-row-index={index}>
      <div className="tile tile-no">{index + 1}</div>
      <div className="tile tile-include">
        <input type="text" value="ABC"></input>
      </div>
      <div className="tile tile-exclude">
        <input type="text" value="DEF"></input>
      </div>
    </div>
  );
}

function RowAll() {
  return (
    <div className="row" data-row-type="all">
      <div className="tile tile-no">ALL</div>
      <div className="tile tile-include">
        <input type="text" value="ABC"></input>
      </div>
      <div className="tile tile-exclude">
        <input type="text" value="DEF"></input>
      </div>
    </div>
  );
}

export default function Board() {
  let rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(RowChar({ index: i }));
  }
  return (
    <div id="board">
      {RowAll()}
      {rows}
    </div>
  );
}
