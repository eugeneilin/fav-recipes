import React from 'react';
import '../styles/Home.css';
import { CollectionList } from '../helpers/CollectionList';
import Dish from '../components/Dish.jsx';
// import { v4 as uuid } from 'uuid';

const Home = () => {
  return (
    <section id='home' className='container'>
      <div>
        {CollectionList.map((dish, id) => {
          return (
            <Dish
              key={id}
              id={id}
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
