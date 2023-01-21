import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => setToyArray(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete() {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => setToyArray(data))
  }

  function onAddToy(newToy) {
    setToyArray([...toyArray, newToy])
  }

  function updateToyArray(updatedToy) {
    const newToyArray = toyArray.map(toy => {
      return toy.id === updatedToy.id ? updatedToy : toy
    })
    setToyArray(newToyArray)
  }

  function handleLike(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "likes": toy.likes + 1,
      }),
      headers: { 'Content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(updatedToy => updateToyArray(updatedToy))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={onAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} handleDelete={handleDelete} handleLike={handleLike} />
    </>
  );
}

export default App;
