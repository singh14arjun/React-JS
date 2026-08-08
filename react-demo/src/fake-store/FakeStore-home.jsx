import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const FakeStoreHome = () => {
    const [categories, setCategories] = useState([]);

    function loadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadCategories();
    }, []);
    return (
        <div>
            <h1>Fake Store Home</h1>
            <ul className="flex flex-col gap-2 m-2 w-fit">
                {
                    categories.map(category => (
                        <li key={category} className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                            <span className="text-white">
                                <Link to={`/products/${category}`}>
                                    {category.toUpperCase()}
                                </Link>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FakeStoreHome;
