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
      <div>
        <div
          className='dish-page-img'
          style={{ background: `url(${dish.image}) no-repeat center / cover` }}
        ></div>
        <div className='dish-page-info-lg'>
          <h3>{dish.name}</h3>
          <div className='tags'>
            <p>Category: {dish.category}</p>
            <p>{dish.timeToPrepare} minutes to prepare</p>
            <p>Serves {dish.servesHowMany} people</p>
          </div>
          <div className='dish-page-info-1'>
            <h4>Ingredients</h4>
            <ul>{displayIngredients}</ul>
          </div>
        </div>
      </div>
      <div className='dish-page-info-2'>
        <h4>Directions</h4>
        <ol>{displayDirections}</ol>
      </div>
    </section>
  );
};

export default DishPage;
