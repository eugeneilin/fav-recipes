import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dish.css';

const Dish = ({ image, name, category, id, timeToPrepare, servesHowMany }) => {
  const navigate = useNavigate();

  return (
    <div
      className='dish'
      onClick={() => {
        navigate(`/dish/${id}`);
      }}
    >
      <div style={{ background: `url(${image}) no-repeat center / cover` }} className='dish-img' />
      <div className='dish-info'>
        <h3>{name}</h3>
        <p>{category}</p>
        <p> | </p>
        <p>{timeToPrepare} min to prepare</p> <p> | </p>
        <p>Serves {servesHowMany} people</p>
      </div>
    </div>
  );
};

export default Dish;
