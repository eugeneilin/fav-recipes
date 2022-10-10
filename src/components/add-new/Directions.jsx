import React from 'react';

const Directions = ({ formData, setFormData }) => {
  return (
    <div id='directions' className='form-page'>
      <div className='form-group'>
        <label htmlFor='timeToPrepare'>Minutes to Prepare</label>
        <input
          type='number'
          id='timeToPrepare'
          min='0'
          value={formData.dishMinToPrep}
          onChange={(e) => setFormData({ ...formData, dishMinToPrep: e.target.value })}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='directions'>Directions</label>
        <input
          type='text'
          id='directions'
          value={formData.dishDirections}
          onChange={(e) => setFormData({ ...formData, dishDirections: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Directions;
