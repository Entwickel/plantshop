import React from 'react';

const plantList = [
  'monstera',
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier'
];

const extractCategories = (plants) => {
  return plants.reduce((categories, plant) => {
    //on prend le premier nom de chaque plante pour en faire une catégorie
    const category = plant.split(' ')[0].toLowerCase();
    if (!categories.includes(category)) {
      categories.push(category);
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
