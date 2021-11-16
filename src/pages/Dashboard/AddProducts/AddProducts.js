import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Products Added Succesfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="add-products">
                <h2>Add Products</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Enter product Name" />
                    <input type="number" {...register("price")} placeholder="Enter Price" />
                    <textarea {...register("description")} placeholder="Enter Details Here" />
                    <input {...register("imageurl")} placeholder="Enter Image Url" />

                    <input type="submit" value="Add Products" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;