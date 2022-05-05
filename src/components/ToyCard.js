import React, { useState } from "react";

function ToyCard({ card }) {
  const { name, image, likes } = card 
  const [like, setLike] = useState(likes)

  function handleLikeBtnClick(e) {
    let numberOfLikes = e.target.textContent.split(' ')[1]
    setLike(parseInt(numberOfLikes) + 1)
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
      <button className="like-btn" onClick={handleLikeBtnClick}>Like {like}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
