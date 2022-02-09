import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(toyArray => setToys(toyArray));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onAddToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleDelete(id){
    console.log(id)
    setToys(toys.filter((toy)=> toy.id !== id))
  }

  function updateLikes(updatedToy){
    setToys(toys.map((toy)=> toy.id === updatedToy.id ? updatedToy : toy))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={onAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onLikes={updateLikes}/>
    </>
  );
}

export default App;
