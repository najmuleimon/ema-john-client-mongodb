import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Checkout from '../Checkout/Checkout';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])
    const [products, setProducts] = useProducts();
    return (
        <div className='shop container'>
            <div className="row">
                <Link to="/checkout" element={<Checkout/>}>checkout</Link>
                <h1>Products: {products.length}</h1>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;