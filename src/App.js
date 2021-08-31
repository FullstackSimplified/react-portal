import { useState } from "react";
import Modal from "./modal";
import "./App.css";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App" onClick={() => console.log("Clicked")}>
      <h2>Click to open Modal</h2>
      <button onClick={() => setShow((s) => !s)}>Open Modal</button>
      <Modal show={show} closeModal={() => setShow(false)} />
    </div>
  );
}

export default App;
