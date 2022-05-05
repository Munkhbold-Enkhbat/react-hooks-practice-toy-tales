import React, { useState } from "react";

function ToyCard({ card, handleRemove }) {
  const { id, name, image, likes } = card 
  const [like, setLike] = useState(likes)

  const handleLikeBtnClick = (e) => {
    let numberOfLikes = parseInt(e.target.textContent.split(' ')[1]) + 1
    setLike(numberOfLikes)
    // console.log("Toy's id:", id);
    // console.log("Number of likes:", numberOfLikes);

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: numberOfLikes
      })
    })
    .then(res => res.json())
    .then(data => console.log("Updated data likes:", data))
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
      <p>{like} Likes </p>
      <button className="like-btn" onClick={handleLikeBtnClick}>Like {like}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
