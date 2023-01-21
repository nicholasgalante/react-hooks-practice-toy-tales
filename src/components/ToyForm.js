import React, { useState } from "react";

function ToyForm({onAddToy}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function handleChange(event) {
    if (event.target.name == "image") {
      setImage(event.target.value)
    } else {
      setName(event.target.value)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        "name": name,
        "image": image,
        "likes": 0,
      })
    })
      .then(res => res.json())
      .then(newToy => onAddToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
