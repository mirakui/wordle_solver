import React, { FC } from "react";

export default function App(
  { Page, pageProps }: { Page: FC; pageProps: Record<string, unknown> },
) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="./style/app.css" />
      </head>
      <header>
        <h1>Word Puzzle Solver</h1>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/mirakui/wordle_solver">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Page {...pageProps} />
      </main>
    </>
  );
}
