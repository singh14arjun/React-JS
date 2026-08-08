import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";

const FakeStoreProducts = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    function loadProducts() {
        axios.get("https://fakestoreapi.com/products/category/" + category)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <div>
            <h1>Fake Store Products</h1>
            <div className="row">
                <div className="col-6">
                    <div className="flex gap-4 m-2 flex-wrap justify-center align-center">
                        {
                            products.map(product => (
                                <div key={product.id} className="border border-red-500 p-5 rounded w-100 bg-gray-800 flex flex-col gap-2 justifiy-center align-center">
                                    <img src={product.image} alt={product.title} className="w-24 h-24 mx-auto" />
                                    <h2 className="text-white text-center">{product.title}</h2>
                                    <p className="text-white text-center">{product.price.toLocaleString("en-IN", { style: "currency", currency: "INR" })}</p>
                                    <p className="text-center">

                                        <Link to={`/products/${category}/${product.id}`} className="bg-red-500 p-2 rounded w-full hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                                            View Details
                                        </Link>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <Outlet />
                </div>
            </div>



            <Link to="/" className="bg-gray-800 p-2 rounded w-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer text-white">
                Back to Home
            </Link>
        </div>
    );
};

export default FakeStoreProducts;