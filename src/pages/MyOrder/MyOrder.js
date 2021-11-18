import React from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = ({ order }) => {
    const { user } = useAuth();
    const { personname, email, name, price, phonenumber } = order;


    if (user?.email == email) {
        var currentUser = email;

        var handleDelete = id => {
            const url = `http://localhost:5000/placeorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('are you sure, Delete this data')
                    }
                })
        }
    }
    return (
        <>
            {
                currentUser &&
                <tr>
                    <td>{personname} </td>
                    <td>{email} </td>
                    <td>{name} </td>
                    <td>{price} </td>
                    <td>{phonenumber} </td>
                    <td><button onClick={() => handleDelete(order._id)}>Delete</button></td>
                </tr>
            }
        </>
    );
};

export default MyOrder;