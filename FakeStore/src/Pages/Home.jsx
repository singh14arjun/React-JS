import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import productService from "../api/services/productService";
import axios from "axios"
const Home = ({ products }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {products && products.map((product) => {
                const imageUrl = product.image || (product.images && product.images[0]) || "";

                return (
                    <div key={product.id} className="border rounded-lg p-4 shadow transform transition duration-500 hover:scale-105">
                        <div className="h-48 overflow-hidden rounded-md mb-4 bg-gray-100 flex items-center justify-center">
                            <img src={imageUrl} alt={product.title} className="max-h-full object-contain" />
                        </div>
                        <h2 className="text-md font-bold truncate" title={product.title}>{product.title}</h2>
                        <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>
                        <p className="text-lg font-semibold mt-2 text-blue-600">${product.price}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Home;