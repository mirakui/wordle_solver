import { useDeno } from "aleph/react";
import React from "react";
import Logo from "~/components/logo.tsx";
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
      <div id="board">
        <div className="row">
          <div className="tile tile-no">ALL</div>
          <div className="tile tile-include">
            <input type="text" value="ABC"></input>
          </div>
          <div className="tile tile-exclude">
            <input type="text" value="DEF"></input>
          </div>
        </div>
        <div className="row">
          <div className="tile tile-no">1</div>
          <div className="tile tile-include">
            <input type="text" value="ABC"></input>
          </div>
          <div className="tile tile-exclude">
            <input type="text" value="DEF"></input>
          </div>
        </div>
        <div className="row">
          <div className="tile tile-no">2</div>
          <div className="tile tile-include">
            <input type="text" value="ABC"></input>
          </div>
          <div className="tile tile-exclude">
            <input type="text" value="DEF"></input>
          </div>
        </div>
        <div className="row">
          <div className="tile tile-no">3</div>
          <div className="tile tile-include">
            <input type="text" value="ABC"></input>
          </div>
          <div className="tile tile-exclude">
            <input type="text" value="DEF"></input>
          </div>
        </div>
        <div className="row">
          <div className="tile tile-no">4</div>
          <div className="tile tile-include">
            <input type="text" value="ABC"></input>
          </div>
          <div className="tile tile-exclude">
            <input type="text" value="DEF"></input>
          </div>
        </div>
        <div className="row">
          <div className="tile tile-no">5</div>
          <div className="tile tile-include">
            <input type="text" value="ABC"></input>
          </div>
          <div className="tile tile-exclude">
            <input type="text" value="DEF"></input>
          </div>
        </div>
      </div>
      <div id="candidates">
        <h2>1000 matches</h2>
        <div id="candidates-body">
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
          <p className="word">HELLO</p>
        </div>
      </div>
      <p className="logo">
        <Logo />
      </p>
      <h1>
        Welcome to use <strong>Aleph.js</strong>!
      </h1>
      <p className="links">
        <a href="https://alephjs.org" target="_blank">Website</a>
        <span></span>
        <a href="https://alephjs.org/docs/get-started" target="_blank">
          Get Started
        </a>
        <span></span>
        <a href="https://alephjs.org/docs" target="_blank">Docs</a>
        <span></span>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">Github</a>
      </p>
      <div className="counter">
        <span>Counter:</span>
        {isSyncing && <em>...</em>}
        {!isSyncing && <strong>{count}</strong>}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  );
}
