import React from "react";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";

import HookExampleThreee from "./components/HookExampleThreee";
function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounterTwo />
      <HookExampleThreee />
    </div>
  );
}

export default App;
