import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://calm-garden-39470.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Products Added Succesfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h2>Add Products</h2>
            <div className="add-products">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Enter product Name" />
                    <input {...register("brandname")} placeholder="Enter Brand Name" />
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