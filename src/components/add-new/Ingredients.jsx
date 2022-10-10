import React from 'react';

const Ingredients = ({ formData, setFormData }) => {
  return (
    <div id='ingredients' className='form-page'>
      <div className='form-group'>
        <label htmlFor='servesHowMany'>Number of People to serve</label>
        <input
          type='number'
          id='servesHowMany'
          min='0'
          value={formData.dishPplToServe}
          onChange={(e) => setFormData({ ...formData, dishPplToServe: e.target.value })}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='ingredients'>Ingredients</label>
        <input
          type='text'
          id='ingredients'
          value={formData.dishIngredients}
          onChange={(e) => setFormData({ ...formData, dishIngredients: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Ingredients;
