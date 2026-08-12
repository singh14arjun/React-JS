import { Link } from "react-router-dom";

export default function TodoNopage() {
    return (
        <div className="bg-red-300 h-screen flex items-center justify-center relative">

            <div className="flex flex-col gap-10 p-2 rounded-lg text-white absolute bg-black/80 w-full h-full">
                <h1 className="text-2xl font-bold p-10 rounded-lg text-center">
                    404 - Page Not Found
                </h1>
                <Link to="/dashboard" className="mx-auto">
                    <button className="bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-700 cursor-pointer">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

