import React from 'react';
import '../styles/AddDish.css';

const AddDish = () => {
  return (
    <section id='add-dish' className='container'>
      <h2>Add New Dish</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Dish Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Choose Category</label>
          <select id='category'>
            <option value='none'>None</option>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='snack'>Snack</option>
            <option value='dessert'>Dessert</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='timeToPrepare'>Minutes to Prepare</label>
          <input type='number' id='timeToPrepare' min='0' />
        </div>
        <div className='form-group'>
          <label htmlFor='servesHowMany'>Number of People to serve</label>
          <input type='number' id='servesHowMany' min='0' />
        </div>
        <div className='form-group'>
          <label htmlFor='ingredients'>Ingredients</label>
          <input type='text' id='ingredients' />
        </div>
        <div className='form-group'>
          <label htmlFor='directions'>Directions</label>
          <input type='text' id='directions' />
        </div>
        <div className='form-group'>
          <label htmlFor='upload'>Upload image</label>
          <button id='upload'>Select</button>
        </div>
        <button className='submit'>Add New Dish</button>
      </form>
    </section>
  );
};

export default AddDish;
