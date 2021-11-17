import React from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = ({ order }) => {
    const { user } = useAuth();
    const { personname, email, name, price, phonenumber } = order;

    if (user?.email == email) {
        var currentUser = email;
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
                    <td><button>Delete</button></td>
                </tr>
            }
        </>
    );
};

export default MyOrder;