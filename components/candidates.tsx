import React from "react";

function Word({ word }: { word: string }) {
  return <p className="word" key={word}>{word}</p>;
}

export default function Candidates({ words }: { words: Array<string> }) {
  return (
    <div id="candidates">
      <h2>{words.length} matched</h2>
      <div id="candidates-body">
        {words.slice(0, 100).map((word) => {
          return Word({ word: word });
        })}
      </div>
    </div>
  );
}
