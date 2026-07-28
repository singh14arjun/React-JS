import { useState } from "react";
import { RiStarSLine } from "react-icons/ri";
const BindingObject = () => {

    const [product, setProduct] = useState({
        id: 1,
        name: "Laptop",
        price: 50000,
        stock: true,
        cities: ["Delhi", "Mumbai", "Chennai"],
        rating: {

            rate: 4.3,
            count: 5009
        }
    });

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Laptop",
            price: 50000,

            stock: true,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imahyvj2a3z5w5gq.jpeg?q=70",
            cities: ["Delhi", "Mumbai", "Chennai"],
            rating: {

                rate: 4.3,
                count: 5009
            }
        },
        {
            id: 2,
            name: "Mobile",
            price: 20000,
            stock: false,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imahyvj2a3z5w5gq.jpeg?q=70",
            cities: ["Delhi", "Mumbai", "Chennai"],
            rating: {

                rate: 4.3,
                count: 5009
            }
        }
    ])


    return (
        <div>
            <h1>Product Details</h1>
            <hr />
            <p>ID:{product.id}</p>
            <p>Name:{product.name}</p>
            <p>Price:{product.price}</p>
            <p>Stock:{product.stock}</p>
            <p>Cities:{product.cities.map((city, index) => <span key={index}>{city}</span>)}</p>
            <p>Rating:{product.rating.rate}</p>
            <p>Count:{product.rating.count}</p>

            <h2 className="my-5 font-bold text-2xl">Product List</h2>
            <div className="flex gap-5 ">

                {
                    products.map((product) => (
                        <div key={product.id} className="border bg-cyan-300">
                            <div className="flex  justify-center items-center">
                                <img src={product.image} alt="" className="w-20 h-20 bg-cyan-100 flex  justify-center items-center" />
                            </div>
                            <p>ID:{product.id}</p>
                            <p>Name:{product.name}</p>
                            <p>Price:{product.price}</p>
                            <p>Stock:{product.stock}</p>
                            <p>Cities:{product.cities.map((city, index) => <span key={index}>{city}</span>)}</p>
                            <p>Rating:{product.rating.rate}</p>
                            <p>Count:{product.rating.count}</p>
                        </div>
                    ))
                }
            </div>
            <div className="mt-5">
                <table className="border">
                    <thead>
                        <tr className="border">
                            <th className="border">ID</th>
                            <th className="border">Name</th>
                            <th className="border">Price</th>
                            <th className="border">Stock</th>
                            <th className="border">Cities</th>
                            <th className="border">Rating</th>
                            <th className="border">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (
                                <tr key={product.id} className="border">
                                    <td className="border">{product.id}</td>
                                    <td className="border">{product.name}</td>
                                    <td className="border">{product.price}</td>
                                    <td className="border">{product.stock ? "In Stock" : "Out of Stock"}</td>
                                    <td className="border">{product.cities.map((city, index) => <span key={index} className="border border-green-500">{city}</span>)}</td>
                                    <td className="border">{product.rating.rate}</td>
                                    <td className="flex flex-row">
                                        {[...Array(Math.round(product.rating.rate))].map((_, index) => (
                                            <span key={index} >
                                                <RiStarSLine />
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BindingObject;