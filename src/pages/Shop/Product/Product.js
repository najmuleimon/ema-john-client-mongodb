import React from 'react';
import { Card } from 'react-bootstrap';
import {BsCart3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id,name, price, img, category} = product;
    const navigate = useNavigate();
    const navigateToDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='col-md-4'>
            <Card className='product-card'>
                <img src={img} alt="Product" />
                <Card.Body>
                    <button className='prod-title' onClick={() => navigateToDetail(_id)}>{name}</button>
                    <h6>Product Id: {_id}</h6>
                    <h5>Category: {category}</h5>
                    <p>Price: ${price}</p>
                    <button className='add-cart-btn'>Add to Cart <BsCart3 className='ms-2'/> </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;