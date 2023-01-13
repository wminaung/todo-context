import { useState } from "react";
import "./App.css";
import { MainContext } from "./components/context/MainContext";

import { Main } from "./components/Main";

function App() {
  const [name, setName] = useState("Win Min Aung");

  return (
    <div className="App">
      <MainContext.Provider value={{ name, setName }}>
        <Main />
      </MainContext.Provider>
    </div>
  );
}

export default App;
