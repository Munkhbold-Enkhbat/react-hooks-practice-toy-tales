import React from "react";

function ToyCard({ card, handleRemove, handleUpdateLike }) {
  const { id, name, image, likes } = card 
  
  const handleLikeBtnClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes + 1,
      })
    })
    .then(res => res.json())
    .then(data => handleUpdateLike(data))
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => console.log("Toy is successfully deleted!", data))
      handleRemove(id)
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
      <button className="like-btn" onClick={handleLikeBtnClick}>Like {likes}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
