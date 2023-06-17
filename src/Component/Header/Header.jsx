import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Clothing from '../../Pages/Clothing/Clothing';
import Search from '../../Pages/Search/Search';
import './header.css';
import Category from '../Category/Category';

const Header = () => {
    const[content, setContent] = useState([]);

    const fetchData = async () => {
        const {data1} = await axios.get(`https://api.postman.com/collections/24582109-37d97559-22b0-42e0-b592-7fd8b90b8e01?access_key=PMAT-01GXAEX88FNRZN45AWACQ2V20F`) ;
        
    };

    useEffect(() => {
        fetchData();
    },[])

    const fetchAllData = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products`);

        setContent(data);
    };

    useEffect(() => {
        fetchAllData();
    },[]);

  return (
    <div className='header'>
        <Search />
        <Category />
        <div className='content'>
            {
                content && content?.map((c) => <Clothing key={c.id} id={c.id} title={c.title} category={c.category} price={c.price} description={c.description} image={c.image} />)
            }
        </div>
    </div>
  )
}

export default Header