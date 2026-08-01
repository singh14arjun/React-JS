import { useEffect, useState } from "react";
import axios from "axios";
import "./mouse-demo.css";

const MouseEvent = () => {
    const [movies, setMovies] = useState([]);
    const [previewImage, setPreviewImage] = useState("");

    function loadMovies() {
        axios.get("./movies.json")
            .then((response) => {
                setMovies(response.data);
                console.log("Movies Data : ", response.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        loadMovies();
    }, []);


    function handleMouseOver(e) {
        setPreviewImage(e.target.src);

        console.log("Mouse Over");
    }

    return (
        <div>
            <h1>Mouse Event</h1>
            <div className="flex justify-center gap-10">

                <div>
                    {movies.map((movie) => (
                        <div key={movie.image} className={`flex movie-container justify-center items-center bg-gray-500 w-40 h-40 rounded-lg my-2`}>
                            <img src={movie.image} alt={movie.name} className="w-30 h-30 cursor-pointer rounded-lg" onMouseOver={handleMouseOver} />
                        </div>
                    ))}
                </div>
                <div>
                    <img src={previewImage} alt="loading" className="w-100 h-100 cursor-pointer rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default MouseEvent