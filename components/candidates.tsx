import React from "react";

function Word({ word }: { word: string }) {
  return <p className="word">{word}</p>;
}

export default function Candidates({ words }: { words: Array<string> }) {
  return (
    <div id="candidates">
      <h2>{words.length} matches</h2>
      <div id="candidates-body">
        {words.map((word) => {
          return Word({ word: word });
        })}
      </div>
    </div>
  );
}
