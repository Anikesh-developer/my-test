import React from 'react';
import { useState } from 'react';
import './clothing.css';

const Clothing = ({id , title , price , description , image , category}) => {

  const[showmodel ,setShowModel] = useState(false);

  const MyModel = () => {
    return <>
      <div className="model-wrapper"></div>
      <div className="model-container">
        <p>{description}</p>
        <button onClick={() => setShowModel(false)}>Close</button>
      </div>
    </>
  }

  return (
    <div className='product__listing'>
      <div className="product__image">
        <img src={image} alt="product_image"/>
      </div>
      <div className="product__title">
        <h1>{title}</h1>  
        <h3>{category}</h3>
      </div>
      <div className="product__button">
        <button onClick={() => setShowModel(true)} className='view'>View</button>
        {showmodel && <MyModel />}
        <button className='update'>Update</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default Clothing
