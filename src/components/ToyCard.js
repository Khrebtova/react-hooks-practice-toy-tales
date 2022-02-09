import React from "react";

function ToyCard({ id, name, image, likes, onDelete, onLikes }) {

  function handleDelete() {
    console.log("delete", id)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(id));
  }

  function handleLike(){
    console.log(id, name, "liked")
    const newLike=likes+1
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({likes : newLike})
    })
      .then((r) => r.json())
      .then((updatedToy) => onLikes(updatedToy));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
