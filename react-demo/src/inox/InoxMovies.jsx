import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaCaretSquareDown, FaCartPlus, FaHeart } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const InoxMovies = () => {
    const [movies, setMoview] = useState([]);

    const loadMoview = async () => {
        try {
            const res = await axios.get("movies.json"); // Changed to movies.json since this is the Inox component
            console.log("Data : ", res.data);
            setMoview(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        loadMoview();
    }, [])
    return (
        <div>
            <h1>Inox Movies</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
                {movies.map((item) => {
                    return (
                        <div key={item.name} className="flex flex-col justify-between gap-5 bg-blue-800 p-2 rounded-lg">
                            <div className="flex justify-center items-center bg-gray-100 p-2 rounded-lg relative">
                                <img src={item.image} alt={item.name} className="w-full h-[200px] object-contain" />
                                <FaHeart className="text-2xl absolute top-1 right-1 text-red-700 cursor-pointer hover:text-red-500" />
                            </div>
                            <div className="flex flex-col justify-between gap-2 flex-grow">
                                <div>
                                    <h2 className="font-bold  text-2xl hover:text-blue-500 cursor-pointer">{item.name}</h2>
                                    <div className="text-gray-500 text-sm">
                                        {item.description}
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <p className="bg-green-700 w-fit rounded text-center text-white px-2">
                                            {item.rating} ⭐
                                        </p>
                                        <p className="text-gray-100 font-semibold text-sm">
                                            {item.totalRatings} Ratings & {item.totalReviews} Reviews
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
                                                            <p className="text-gray-200 font-bold text-sm" key={offer}>{offer}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-5 mt-auto pt-4">
                                    <button className="bg-yellow-400 text-black px-2 py-2 rounded-lg flex items-center gap-2 font-semibold cursor-pointer hover:bg-yellow-500">
                                        Watch Later <FaCaretSquareDown className="text-2xl" />
                                    </button>
                                    <button className="bg-green-700 text-white px-2 py-2 rounded-lg flex items-center gap-2 font-semibold cursor-pointer hover:bg-green-800">
                                        Book Ticket <IoArrowForward className="text-2xl" />
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

export default InoxMovies;