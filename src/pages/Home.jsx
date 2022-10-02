import React from 'react';
import '../styles/Home.css';
import { CollectionList } from '../helpers/CollectionList';
import Dish from '../components/Dish.jsx';

const Home = () => {
  return (
    <section id='home' className='container'>
      <div>
        {CollectionList.map((dish, index) => {
          return (
            <Dish
              id={index}
              name={dish.name}
              image={dish.image}
              category={dish.category}
              timeToPrepare={dish.timeToPrepare}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
