import React, { useState } from "react";

function ToyForm({ toys, setToys}) {

  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0
  })

  const handleAddToy = (aToy) => {
    setToys([...toys, aToy])
  }

  const handleChange = (e) => {
    setNewToy({...newToy, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const createdToy = {
      name: newToy.name,
      image: newToy.image,
      likes: newToy.likes
    }
    console.log("Created Toy:", createdToy);

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(createdToy)
    }).then(res => res.json())
      .then(toy => handleAddToy(toy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"          
        />
      </form>
    </div>
  );
}

export default ToyForm;
