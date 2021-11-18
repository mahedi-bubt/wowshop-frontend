import { useEffect, useState } from "react";

const usePlaceOrders = () => {
    const [placeorder, setPlaceOrder] = useState([]);

    useEffect(() => {
        fetch('https://calm-garden-39470.herokuapp.com/placeorder')
            .then(res => res.json())
            .then(data => setPlaceOrder(data));
    }, [])
    return [placeorder]
}

export default usePlaceOrders;