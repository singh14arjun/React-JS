import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdAdd, MdDashboard, MdList, MdLogout, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const TodoDashboard = () => {

    const [appiontments, setAppiontments] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [user, setUser] = useState(cookies.user);
    const navigate = useNavigate();


    function handleLogout() {
        removeCookie("user");
        setUser(null);
        navigate("/login");
    }

    const navlinks = [
        {
            id: 0,
            name: "Dashboar",
            url: "/dashboard",
            icon: <MdDashboard />
        },
        {
            id: 1,
            name: "Todo List",
            url: "/todo-list",
            icon: <MdList />
        },
        {
            id: 2,
            name: "Profile",
            url: "/profile",
            icon: <FaUser />
        },
        {
            id: 3,
            name: "Settings",
            url: "/settings",
            icon: <MdSettings />
        }
    ]

    const isActive = (url) => {
        return location.pathname === url ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700";
    }


    return (
        <div>
            <div className="min-h-screen bg-gray-200">

                <div className="flex min-h-screen">

                    <aside className="w-64 bg-gray-100 border-r  p-4 h-screen fixed">

                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Todo App
                            </h1>
                            <p className="text-gray-600">Welcome, {user?.fullName}</p>
                        </div>
                        <nav className="flex flex-col gap-2">

                            {navlinks.map((link) => (
                                <Link
                                    key={link.url}
                                    to={link.url}
                                    className={`flex items-center gap-3 p-3 rounded-lg
                                   text-gray-700    
                                   hover:bg-blue-500 hover:text-white
                                   transition duration-200 ${isActive(link.url)}`}
                                >
                                    <div className="text-xl">
                                        {link.icon}
                                    </div>

                                    <p className="font-medium">
                                        {link.name}
                                    </p>
                                </Link>
                            ))}

                        </nav>

                    </aside>


                    <main className="flex-1 ml-64">

                        <Outlet />

                    </main>

                </div>

            </div>



        </div>
    );
};

export default TodoDashboard;