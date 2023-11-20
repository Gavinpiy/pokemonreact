import { useState } from "react";
import logo from "./logo.jpg";
import FetchPokemon from "./pokemonfetch/fetch";
import "./App.css";

function App() {
  // set state for initial pokemon id
  const [id, setId] = useState(1);
  // function to generate random number on click and update id
  function handleClick() {
    setId(Math.floor(Math.random() * 1000 + 1) + 1);
  }
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo"></img>
      <button onClick={handleClick}>Catch a Pokemon</button>
      <FetchPokemon id={id}/>
    </div>
  );
}

export default App;
