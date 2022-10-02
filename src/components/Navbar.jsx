import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='container'>
        <h1>
          <Link to='/'>Favorite Recipes</Link>
        </h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/add'>Add</Link>
          <Link to='/about'>About</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
