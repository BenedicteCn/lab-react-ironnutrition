import React from 'react'
import { useState } from 'react'
import foodsFromJson from '../foods.json';
import { Card, Col, Button, Row, Divider } from 'antd';
import AddFoodForm from './AddFoodForm';


const Foodlist = () => {
  const [foods, setFoods] = useState(foodsFromJson)

  const addFoodbox = (newFoodbox) => {
    // add it to the list of flowers
    setFoods([...foods, newFoodbox])
  }

  const deleteFood = (index) => {
    const copy = [...foods];
    copy.splice(index, 1);
    setFoods(copy);
  };

  const [showForm, setShowForm] = useState(true);


  //priviligier le return sur le .map

  return (
    <div >

       <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Show Form'}{' '}
      </Button>

      {showForm && <AddFoodForm addFoodbox={addFoodbox} />}
      <Divider>Food List</Divider>
      <Row style={{ width: '50%', justifyContent: 'center' }}>
      <Col >
      {foods.map((food) => (

          < Card style={{ width: 230, height: 300, margin: 10 }}
          title = {food.name}>

          <img src={food.image} width={100} alt="pic"/>
          <p> Calories: {food.calories} </p>
          <p> Servings: {food.servings} </p>
          <p> Total Calories: {food.servings * food.calories}kcal </p>
          <Button type="primary" onClick={() => {deleteFood()}}>Delete</Button>
          </Card>
        ))}
        </Col>
      </Row>
    </div>
  )
}

export default Foodlist
