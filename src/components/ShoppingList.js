import React from 'react';
import { plantList } from '../datas/plantList';

const extractCategories = (plants) => {
  return plants.reduce((categories, plant) => {
    //on prend le premier nom de chaque plante pour en faire une catégorie
    categories.push(plants.category);
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
          <li key={category}>{category}</li>
        ))}
      </ul>
      
      <h2>Plantes à vendre</h2>
      <ul>
        {plantList.map((plant) => (
          <li key={`${plant}-${Math.random()}`}>{plant}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
