import React, { createContext, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./components/Words";

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>
      <AppContext.Provider value={{ board, setBoard }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
