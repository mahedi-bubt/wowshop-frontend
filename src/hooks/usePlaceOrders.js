import { useEffect, useState } from "react";

const usePlaceOrders = () => {
    const [placeorder, setPlaceOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/placeorder')
            .then(res => res.json())
            .then(data => setPlaceOrder(data));
    }, [])
    return [placeorder]
}

export default usePlaceOrders;