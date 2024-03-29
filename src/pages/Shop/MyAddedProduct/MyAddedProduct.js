import React, {useState, useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAddedProduct = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let count = 1;

    useEffect(() => {
        const url = `http://localhost:5000/added-product?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyProducts(data));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/added-product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = myProducts.filter(product => product._id !== id);
                setMyProducts(remaining);
            })
        }
    }
    return (
        <div className='manage-product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {
                            myProducts.length > 0 ? <h2>My added Products: {myProducts.length}</h2> : <h2>You didn't add any Product</h2>
                        }
                        
                        { myProducts.length > 0 &&
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
                                myProducts.map(product => <tr key={product._id}>
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
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddedProduct;
