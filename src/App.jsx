import { useState } from "react";
import "./App.css";
import Mainpage from "./assets/components/Mainpage/Mainpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mainpage />
    </>
  );
}

export default App;
