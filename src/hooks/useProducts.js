import { useEffect, useState } from "react";

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch(`https://calm-garden-39470.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, []);
    return [allProducts];
}

export default useProducts;