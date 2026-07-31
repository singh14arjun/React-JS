import Navbar from "../Component/Navbar";
import Home from "./Home";
import ImageSlider from "./ImageSlider.jsx/ImageSlider";
import { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {

    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const [searchedProducts, setSearchedProducts] = useState([]);

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadProducts = () => {
        axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
            setProducts(res.data);
            console.log("products", products);
        }).catch((err) => {
            console.log(err);
        })
    }

    const loadCategories = () => {
        axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
            setCategories(res.data);
            console.log("categories", categories);
        }).catch((err) => {
            console.log(err);
        })
    }

    const loadSearchProducts = (search) => {
        axios.get(`https://api.escuelajs.co/api/v1/products?title=${search}`).then((res) => {
            setProducts(res.data);
            console.log("products", products);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        loadProducts();
        loadCategories();
    }, []);

    const loadProductsByCategory = (category) => {
        axios.get(`https://api.escuelajs.co/api/v1/products?category=${category}`).then((res) => {
            setProducts(res.data);
            console.log("products", products);
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <div>
            <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
            <div className="flex">
                <aside className="w-1/5">
                    <h1 className="text-xl font-bold mb-4">Categories</h1>
                    {
                        categories.map((category) => {
                            return (
                                <div key={category.id} className="cursor-pointer hover:text-blue-600">
                                    <p>{category.name}</p>
                                </div>
                            )
                        })
                    }

                </aside>
                <section className="w-4/5">
                    <ImageSlider />
                    <Home products={products} />
                </section>
            </div>
        </div>
    );
};

export default Index;