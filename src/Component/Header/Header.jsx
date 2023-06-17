import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Clothing from '../../Pages/Clothing/Clothing';
import './header.css';

const Header = () => {
    const[content, setContent] = useState([]);

    const fetchAllData = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products`);

        setContent(data);
    };

    useEffect(() => {
        fetchAllData();
    },[]);

  return (
    <div className='header'>
        <div className='content'>
            {
                content && content?.map((c) => <Clothing key={c.id} id={c.id} title={c.title} category={c.category} price={c.price} description={c.description} image={c.image} />)
            }
        </div>
    </div>
  )
}

export default Header