import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])

  const renderCards = () => {
    return cards.map(c => {
      return <ToyCard key={c.id} card={c}/>
    })
  }
  return (
    <div id="toy-collection">{renderCards()}</div>
  );
}

export default ToyContainer;
