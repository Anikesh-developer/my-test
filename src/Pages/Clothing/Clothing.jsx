import React from 'react';
import { useState } from 'react';
import './clothing.css';
import axios from 'axios';
import { useEffect } from 'react';

const Clothing = ({id , title , price , description , image , category}) => {

  const[showmodel ,setShowModel] = useState(false);

  const[content , setContent] = useState([]);

  const fetchCatory = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products/categories');

    setContent(data);
  }

  console.log(content);

  useEffect(() => {
    fetchCatory();
  },[]);

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
        <div className="product__details">
          <h3>{category}</h3>
          <span>${price}</span>
        </div> 
      </div>
      <div className="product__button">
        <button onClick={() => setShowModel(true)} className='view'>View</button>
        {showmodel && <MyModel />}
        <button className='update'>Update</button>
        <button className='delete'>Delete</button>
      </div>

      <div className="product__category">

      </div>

    </div>
  )
}

export default Clothing