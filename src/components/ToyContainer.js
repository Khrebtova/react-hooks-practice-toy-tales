import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLikes }) {
  return (
    <div id="toy-collection">
      {toys && toys.map((toy, index) => {
        return <ToyCard key={index} onLikes={onLikes} onDelete={onDelete} name={toy.name} image={toy.image} likes={toy.likes} id={toy.id}/>
      })}
    </div>
  );
}

export default ToyContainer;
