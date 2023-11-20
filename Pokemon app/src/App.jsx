import { useState } from "react";

function App() {
  // set state for initial pokemon id
  const [id, setId] = useState(1);
  // function to generate random number on click and update id
  function handleClick() {
    setId(Math.floor(Math.random() * 1000 + 1) + 1);
  }
  return <div>{id}</div>;
}

export default App;
