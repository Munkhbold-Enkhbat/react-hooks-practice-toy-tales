import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  const handleRemoveFromList = (id) => {
    let updatedCards = toys.filter(toys => toys.id !== id)
    setToys(updatedCards)
  }

  function handleUpdateLike(toy) {
    const newToys = toys.map(t => t.id === toy.id ? toy : t)
    setToys(newToys)
  }  

  const renderCards = () => {
    return toys.map(t => {
      return <ToyCard key={t.id} toy={t} handleRemove={handleRemoveFromList} handleUpdateLike={handleUpdateLike}/>
    })
  }
  return (
    <div id="toy-collection">{renderCards()}</div>
  );
}

export default ToyContainer;
