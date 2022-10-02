import React from 'react';
import { useParams } from 'react-router-dom';
import { CollectionList } from '../helpers/CollectionList';
import '../styles/DishPage.css';

const DishPage = () => {
  const { id } = useParams();
  const dish = CollectionList[id];

  let displayIngredients = dish.ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  let displayDirections = dish.directions.map((directionsStep) => {
    return <li>{directionsStep}</li>;
  });

  return (
    <section id='dish-page' className='container'>
      <div
        className='dish-img'
        style={{ background: `url(${dish.image}) no-repeat center / cover` }}
      ></div>
      <div>
        <h3>{dish.name}</h3>
        <div>{dish.category}</div>
        <div>{dish.timeToPrepare} minutes to prepare</div>
        <div>
          <h4>Ingredients</h4>
          <ul>{displayIngredients}</ul>
        </div>
        <div>
          <h4>Directions</h4>
          <ol>{displayDirections}</ol>
        </div>
      </div>
    </section>
  );
};

export default DishPage;
