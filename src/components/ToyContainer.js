import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray, handleDelete}) {


  const toyCards = toyArray.map(toy=>{
    return <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete}/>
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
