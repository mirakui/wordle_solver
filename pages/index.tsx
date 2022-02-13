import { useDeno } from "aleph/react";
import React from "react";
import Logo from "~/components/logo.tsx";
import Board from "~/components/board.tsx";
import Candidates from "~/components/candidates.tsx";
import useCounter from "~/lib/useCounter.ts";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <Board />
      <Candidates words={["HELLO", "WORLD"]} />
    </div>
  );
}
