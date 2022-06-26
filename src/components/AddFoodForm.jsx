import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({addFoodbox}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState()
  const [servings, setServings] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    // submission of form all happens here
    const newFoodbox= { name, image, calories, servings }
    addFoodbox(newFoodbox)
  }



  return (

    <form action='#' onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" placeholder='e.g. Strawberry' onChange={(event) => setName(event.target.value)} />

      <label>Image</label>
      <Input value={image} type="text" placeholder='e.g. https://static.wixstatic.com/media/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png' onChange={(event) => setImage(event.target.value)} />


      <label>Calories</label>
      <Input value={calories} type="number" placeholder='e.g. 5' onChange={(event) => setCalories(event.target.value)} />

      <label>Servings</label>
      <Input value={servings} type="number" placeholder='e.g. 1' onChange={(event) => setServings(event.target.value)} />

      <button type="submit" value="Add Foodbox">Create</button>
    </form>
  );
}

export default AddFoodForm;
