import { useEffect, useState } from "react";
import { MdMonitorHeart, MdOutlineLocalOffer } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus, FaForward, FaHeart } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
const Flipkart = () => {

    const [product, setProduct] = useState([]);

    const loadData = () => {
        var http = new XMLHttpRequest();
        http.open("GET", "public/data.json", true);
        http.send();
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                var data = JSON.parse(http.responseText);
                console.log(data);

                setProduct(data);
            }
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <h1>Flipkart</h1>
            <div className="flex flex-col gap-10 p-10">
                {product.map((item) => {
                    return (
                        <div key={item.name} className="flex flex-row gap-5">
                            <div className="bg-gray-100 p-2 rounded-lg relative">
                                <FaHeart className="text-2xl absolute top-1 right-1 text-red-500" />
                                <img src={item.image} t={item.name} width="200" height="200" />

                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-bold  text-2xl hover:text-blue-500 cursor-pointer">{item.name}</h2>
                                <div className="text-gray-500 text-sm">
                                    {item.description}
                                </div>

                                <div className="flex flex-row gap-2">
                                    <p className="bg-green-700 w-fit rounded text-center text-white px-2">
                                        {item.rating.rating} ⭐
                                    </p>
                                    <p className="text-gray-500 font-bold">
                                        {item.rating.totalRatings} Ratings & {item.rating.totalReviews} Reviews
                                    </p>

                                </div>
                                <p className="text-xl">{item.price.toLocaleString("en-IN", { style: "currency", currency: "INR" })}</p>
                                <div className="flex flex-row gap-2">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold">Available Offers</p>
                                        <div className="flex flex-col gap-1">
                                            {item.offers.map((offer) => {
                                                return (
                                                    <div className="flex flex-row gap-2">
                                                        <MdOutlineLocalOffer className="text-green-600 text-xl" />
                                                        <p className="text-gray-500 font-bold text-sm" key={offer}>{offer}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-5">
                                    <button className="bg-yellow-400 text-black px-2 py-2 rounded-lg flex items-center gap-2 font-semibold cursor-pointer hover:bg-yellow-500">
                                        Add to Cart <FaCartPlus className="text-2xl" />
                                    </button>
                                    <button className="bg-green-700 text-white px-2 py-2 rounded-lg flex items-center gap-2 font-semibold cursor-pointer hover:bg-green-800">
                                        Buy Now <IoArrowForward className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Flipkart;