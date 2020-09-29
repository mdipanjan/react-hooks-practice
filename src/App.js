import React from "react";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookExampleThreee from "./components/HookExampleThreee";
import HookExampleFour from "./components/HookExampleFour";
function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounterTwo />
      <HookExampleThreee />
      <HookExampleFour />
    </div>
  );
}

export default App;
