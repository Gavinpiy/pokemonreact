import { useState } from "react";
import logo from "./logo.jpg";
import fetchPokemon from "./pokemonfetch/fetch";

function App() {
  // set state for initial pokemon id
  const [id, setId] = useState(1);
  // function to generate random number on click and update id
  function handleClick() {
    setId(Math.floor(Math.random() * 1000 + 1) + 1);
  }
  return (
    <div>
      <img src={logo} alt="logo"></img>
      <button onClick={handleClick}>Catch a Pokemon</button>
      <fetchPokemon id={id}/>
    </div>
  );
}

export default App;
