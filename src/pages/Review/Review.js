import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    alert('Order Placed Succesfully');
                    reset();
                }
            })
    }

    return (
        <div className="review">
            <h2 style={{ margin: "50px 0" }}>Please Send Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("personname")} value={user?.displayName} />
                <input {...register("rating")} placeholder="please enter 0 to 5 any numbers" />
                <textarea {...register("comment")} placeholder="Enter Comments Here" />

                <input type="submit" value="Click Here" />
            </form>
        </div>
    );
};

export default Review;