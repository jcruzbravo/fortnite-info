import React from 'react';
import '../styles/NotFound.scss';
import notFound from '../assets/notFound.jpg';

const NotFound = () => {
  return (
    <div className='error-404-container' style={{backgroundImage: "url(" + notFound + ")"}}>
      <div className='error-404-content'>
        <h1>Oops! Not Found</h1>
        <h2>404</h2> 
      </div>
    </div>
  );
}

export default NotFound;