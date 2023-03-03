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
      <p style={{ marginBottom: '1rem' }}>
        <strong>NOTE:</strong> This app is still in development stage. Feel free to click around,
        though some features may not work properly yet. You can read more about this app here
        &#8211;{' '}
        <a
          style={{ color: '#999', textDecoration: 'underline' }}
          href='https://eugeneilin.dev/experience/3/'
        >
          https://eugeneilin.dev/experience/3/
        </a>
        .
      </p>

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
