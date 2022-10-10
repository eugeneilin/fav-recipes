import React from 'react';

const Added = ({ formData }) => {
  return (
    <div id='added'>
      <p>
        <strong>{formData.dishName}</strong> has been successfully added to your collection!
      </p>
    </div>
  );
};

export default Added;
