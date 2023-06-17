import React ,{ useState , useEffect}from 'react';
import axios from 'axios';
import Jewelary from '../../Pages/Jewelary/Jewelary';

const Category = () => {


    const[content ,setContent] = useState([])

    const fetchProduct = async () => {
        const{data} = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);

        setContent(data);

    }

    console.log(content);

    useEffect(() => {
        fetchProduct();
    },[])

    const getToProduct = () => {
        {
            content && content?.map((c) => <Jewelary key={c.id} id={c.id} title={c.title} category={c.category} price={c.price} description={c.description} image={c.image} />)
        }
    }

  return (
    <div>
        <select name='Category' >
            <option>Men's Clothing</option>
            <option>Electronic</option>
            <option onClick={getToProduct()}>Jewelary</option>
            <option>Women's Clothing</option>
        </select>
    </div>
  )
}

export default Category