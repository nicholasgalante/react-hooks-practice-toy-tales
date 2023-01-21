import React from "react";

function ToyCard({toy, handleDelete, handleLike}) {
  const {name, image, likes} = toy;

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(()=>handleDelete())
  }

  function handleLikeClick(){
    handleLike(toy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
