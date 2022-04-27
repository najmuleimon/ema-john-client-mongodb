import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    let count = 1;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div className='manage-product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Manage Products</h2>
                        
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Id</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                products.map(product => <tr key={product._id}>
                                    <td>{count++}</td>
                                    <td><h6>{product.name}</h6></td>
                                    <td><p>{product._id}</p></td>
                                    <td><h6>{product.category}</h6></td>
                                    <td><h6>{product.price}</h6></td>
                                    <td><button onClick={() => navigate(`/update/${product._id}`)} className='btn btn-warning'>Update</button></td>
                                    <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>)
                            }
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;