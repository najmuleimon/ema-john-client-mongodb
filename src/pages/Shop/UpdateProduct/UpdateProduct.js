import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {id} = useParams();
    const onSubmit = data => {
        const url = `http://localhost:5000/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        });
    };
    return (
        <div className='upload-product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="pname">Product name</label>
                            <input id="pname" placeholder='Product name' {...register("name")} />

                            <label htmlFor="cat">Category</label>
                            <input id="cat" placeholder='Category' {...register("category")} />

                            <label htmlFor="seller">Seller</label>
                            <input id="seller" placeholder='Seller' {...register("seller")} />

                            <label htmlFor="price">Price</label>
                            <input id="price" placeholder='Price' {...register("price")} />

                            <label htmlFor="stock">Stock</label>
                            <input id="stock" placeholder='Stock' {...register("stock")} />

                            <label htmlFor="imglink">Image Link</label>
                            <input id="imglink" placeholder='Image link' {...register("img")} />

                            <label htmlFor="quantity">Quantity</label>
                            <input id="quantity" placeholder='Quantity' {...register("quantity")} />
                            
                            <button type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;