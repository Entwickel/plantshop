import React from 'react';
import { plantList } from '../datas/plantList';
import CareScale from './Carescale';

const extractCategories = (plants) => {
    var categories = []
    return plants.reduce((plants, plant) => {
      //on prend le premier nom de chaque plante pour en faire une catégorie
      if (!categories.includes(plant.category)) {
        categories.push(plant.category);
    }
        return categories;
    }, []);
  };
  
function handleClick(plantName,updateCart,updateTotal){
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}
function ShoppingList({cart, updateCart,total, updateTotal,plantPrice}) {
  console.log(cart)
  console.log(total)
  const categories = extractCategories(plantList);
  
  return (
    <div>
      <h2>Catégories de plantes</h2>
      <ul>
        {categories.map((category) => (
          <li key={`${category}-${category}`}> {category}</li>
        ))}
      </ul>

      <h2>Plantes à vendre</h2>
      <ul>
      {plantList.map((plant) => (
          <li onClick={ () => handleClick(plant.name,updateCart(cart + 1),  updateTotal((cart + 1) * plantPrice))} key={plant.id}>
            <img className='lmj-plant-item-cover' src = {plant.cover}/>
            {plant.name} {plant.isBestSale && <span>🔥</span>} 
            <div>
            <CareScale careType ='water' scaleValue= {plant.water}/>
            <CareScale careType='light' scaleValue = {plant.light}/>
            <button>Ajouter</button>
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;