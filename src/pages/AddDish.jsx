import React, { useState } from 'react';
import '../styles/AddDish.css';
import MainInfo from '../components/add-new/MainInfo';
import Ingredients from '../components/add-new/Ingredients';
import Directions from '../components/add-new/Directions';
import Confirm from '../components/add-new/Confirm';
import Added from '../components/add-new/Added';

const AddDish = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    dishName: '',
    dishCategory: '',
    dishImage:
      'https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dishPplToServe: '',
    dishIngredients: '',
    dishMinToPrep: '',
    dishDirections: '',
  });

  const FormTitles = ['Main Info', 'Ingredients', 'Directions', 'Please Confirm', 'Completed'];

  const displayPage = () => {
    if (page === 0) {
      return <MainInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Ingredients formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Directions formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Confirm formData={formData} />;
    } else if (page === 4) {
      return <Added formData={formData} />;
    }
  };

  return (
    <section id='add-dish'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
          className='progress-bar'
          style={{
            width:
              page === 0
                ? '20%'
                : page === 1
                ? '40%'
                : page === 2
                ? '60%'
                : page === 3
                ? '80%'
                : '100%',
          }}
        ></div>
        <div className='form-container'>
          <h2 className='form-header'>{FormTitles[page]}</h2>

          <div className='form-body'>{displayPage()}</div>
          <div className='form-footer'>
            <button
              onClick={() => {
                setPage((current) => current - 1);
              }}
              style={{ display: (page === 0) | (page === 4) ? 'none' : 'block' }}
            >
              Go Back
            </button>
            <button
              onClick={() => {
                if (page === 3) {
                  console.log('post to api');
                  setPage((current) => current + 1);
                } else {
                  setPage((current) => current + 1);
                }
              }}
              style={{ display: page === 4 ? 'none' : 'block' }}
            >
              {page === 3 ? 'Add Dish' : 'Continue'}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddDish;
