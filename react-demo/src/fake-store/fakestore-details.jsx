import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const FakeStoreDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    function loadProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadProduct();
    }, []);
    return (
        <div>
            <h1>Fake Store Details</h1>
            <h2>{product?.title}</h2>
            <p>{product?.price?.toLocaleString("en-IN", { style: "currency", currency: "INR" })}</p>
            <img src={product?.image} alt={product?.title} />
            <p>{product?.description}</p>
            <p>{product?.category}</p>
            <p>{product?.rating?.rate}</p>
            <p>{product?.rating?.count}</p>
            <Link to={`/products/${product?.category}`} className="bg-gray-800 p-2 rounded w-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer text-white">
                Back to {product?.category}
            </Link>
        </div>
    );
};

export default FakeStoreDetails;