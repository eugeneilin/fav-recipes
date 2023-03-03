import React from 'react';

const MainInfo = ({ formData, setFormData }) => {
  return (
    <div id='main-info' className='form-page'>
      <div className='form-group'>
        <label htmlFor='name'>Dish Name</label>
        <input
          type='text'
          id='name'
          value={formData.dishName}
          onChange={(e) => setFormData({ ...formData, dishName: e.target.value })}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='category'>Choose Category</label>
        <select
          id='category'
          value={formData.dishCategory}
          onChange={(e) => setFormData({ ...formData, dishCategory: e.target.value })}
        >
          <option value='none'>None</option>
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='snack'>Snack</option>
          <option value='dessert'>Dessert</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='upload'>Upload image</label>
        <button id='upload' name='dishImage'>
          Choose file...
        </button>
      </div>
    </div>
  );
};

export default MainInfo;
