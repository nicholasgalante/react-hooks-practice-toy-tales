import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray, handleDelete, handleLike}) {


  const toyCards = toyArray.map(toy=>{
    return <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} handleLike={handleLike}/>
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
