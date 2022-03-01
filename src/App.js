//import Counter from "./Counter";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState("dark");

  function toggleTheme(event){
    setTheme(event.target.value)
  }

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>
      <select onChange={toggleTheme}>
        <option value={"light"} selected={theme === "light"}>Light theme</option>
        <option value={"dark"} selected={theme === "dark"}>Dark theme</option>
      </select>
    </div>
  );
}

export default App;
