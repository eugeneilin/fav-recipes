import React from 'react';

const Confirm = ({ formData }) => {
  return (
    <div id='confirm'>
      <div>
        <div
          className='confirm-page-img'
          style={{ background: `url(${formData.dishImage}) no-repeat center / cover` }}
        ></div>
        <div className='confirm-page-info-lg'>
          <h3>Dish Name: {formData.dishName}</h3>
          <div className='tags'>
            <p>Category: {formData.dishCategory}</p>
            <p>{formData.dishMinToPrep} minutes to prepare</p>
            <p>Serves {formData.dishPplToServe} people</p>
          </div>
          <div className='confirm-page-info-1'>
            <h4>Ingredients</h4>
            <ul>{formData.dishIngredients}</ul>
          </div>
        </div>
      </div>
      <div className='confirm-page-info-2'>
        <h4>Directions</h4>
        <ol>{formData.dishDirections}</ol>
      </div>
    </div>
  );
};

export default Confirm;
