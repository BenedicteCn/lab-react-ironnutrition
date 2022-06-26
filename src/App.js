// src/App.js
import Search from './components/Search';
import './App.css';
import Foodlist from './components/Foodlist';
import foodsFromJson from './foods.json';
import { Divider } from 'antd';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsFromJson);
  const [search, setSearch] = useState('');

  const foodToDisplay = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(foodToDisplay);

  return (
    <div className="App">
      <Divider>Search</Divider>
      {/* <Button onclick={() => setShowForm(showForm)}>
        {showForm ? 'Hide form'}
      </Button> */}
      <Search search={search} setSearch={setSearch} />
      <Foodlist {...foodsFromJson} />
    </div>
  );
}
export default App;
