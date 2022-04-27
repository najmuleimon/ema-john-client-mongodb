import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className='product-detail'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Name: {product.name}</h2>
                        <h4>Product Id: {product._id}</h4>
                        <h3>Category: {product.category}</h3>
                        <h3>Seller: {product.seller}</h3>
                        <h3>Stock: {product.stock}</h3>
                        <h1>Price: ${product.price}</h1>
                        <button>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;