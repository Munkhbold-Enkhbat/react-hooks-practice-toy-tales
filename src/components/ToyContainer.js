import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])

  const handleRemoveFromList = (id) => {
    let updatedCards = cards.filter(card => card.id !== id)
    setCards(updatedCards)
  }

  function handleUpdateLike(toy) {
    const newCards = cards.map(card => card.id === toy.id ? toy : card)
    setCards(newCards)
  }
  

  const renderCards = () => {
    return cards.map(c => {
      return <ToyCard key={c.id} card={c} handleRemove={handleRemoveFromList} handleUpdateLike={handleUpdateLike}/>
    })
  }
  return (
    <div id="toy-collection">{renderCards()}</div>
  );
}

export default ToyContainer;
