import React from 'react';
import { plantList } from '../datas/plantList';

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
  
function ShoppingList() {

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
          <li key={plant.id}>
          {plant.name} {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;