import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import '../styles/Home.css';
import Dish from '../components/Dish.jsx';

const Home = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let results = [];
    const unSubscribe = () => {
      getDocs(collection(db, 'recipes')).then((query) => {
        query.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log(results);
        setDocuments(results);
      });
    };
    unSubscribe();
  }, []);

  return (
    <section id='home' className='container'>
      <div>
        {documents.map((dish, i) => {
          return (
            <Dish
              key={i}
              id={i}
              name={dish.dishName}
              image={dish.dishImage}
              category={dish.dishCategory}
              timeToPrepare={dish.dishMinToPrep}
              servesHowMany={dish.dishPplToServe}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
