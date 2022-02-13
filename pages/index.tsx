import { useDeno } from "aleph/react";
import React from "react";
import useCounter from "~/lib/useCounter.ts";
import Solver from "~/components/solver.tsx";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <Solver />
    </div>
  );
}
