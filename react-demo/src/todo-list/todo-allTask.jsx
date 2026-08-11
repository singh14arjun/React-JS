import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdAdd, MdDelete, MdEdit, MdLogout, MdPassword } from "react-icons/md";

const TodoAllTask = () => {
    const [appiontments, setAppiontments] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [user, setUser] = useState(cookies.user);
    const navigate = useNavigate();

    function loadAppiontments() {

        if (!user) {
            navigate("/login");
            return;
        }

        axios.get(`http://localhost:3000/appointments`)
            .then((res) => {
                const filteredAppointments = res.data.filter(
                    (appointment) => appointment.userId === user.id
                );
                console.log(filteredAppointments);
                setAppiontments(filteredAppointments);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadAppiontments();
    }, []);

    function handleLogout() {
        removeCookie("user");
        setUser(null);
        navigate("/login");
    }

    function handleEdit(id) {
        navigate(`edit/${id}`);
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/appointments/${id}`)
            .then((res) => {
                console.log(res);
                loadAppiontments();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleView(id) {
        navigate(`/view-task/${id}`);
    }

    return (
        <div>
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className="w-64 px-4 py-2 rounded-lg
                                   border border-gray-300
                                   outline-none
                                   focus:border-blue-500
                                   focus:ring-2
                                   focus:ring-blue-200"
                            />
                        </div>


                        {/* Search Button */}
                        <button
                            type="button"
                            className="px-5 py-2
                                                   bg-blue-500
                                                   hover:bg-blue-600
                                                   text-white
                                                   font-semibold
                                                   rounded-lg
                                                   transition
                                                   cursor-pointer"
                        >
                            Search
                        </button>

                    </div>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="flex items-center gap-2
                                                   px-4 py-2
                                                   bg-blue-500
                                                   hover:bg-blue-600
                                                   text-white
                                                   rounded-lg
                                                   font-semibold
                                                   transition
                                                   cursor-pointer"
                            onClick={() => navigate("/dashboard/add")}
                        >
                            <span>Add New Task</span>
                            <MdAdd className="text-xl" />
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2
                                                   px-4 py-2
                                                   bg-yellow-500
                                                   hover:bg-yellow-600
                                                   text-white
                                                   rounded-lg
                                                   font-semibold
                                                   transition
                                                   cursor-pointer"
                            onClick={handleLogout}
                        >
                            <span>Logout</span>
                            <MdLogout className="text-xl" />
                        </button>

                    </div>


                </div>

                <div className="flex gap-10 mt-5 bg-gray-300 p-5">

                    <select
                        className="px-4 py-2 rounded-lg
                               border border-gray-300
                               bg-white
                               outline-none
                               cursor-pointer
                               focus:border-blue-500
                               focus:ring-2
                               focus:ring-blue-200"
                    >
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                    <select
                        className="px-4 py-2 rounded-lg
                               border border-gray-300
                               bg-white
                               outline-none
                               cursor-pointer
                               focus:border-blue-500
                               focus:ring-2
                               focus:ring-blue-200"
                    >
                        <option value="">All Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </header>

            <section className="p-6">

                <div className="bg-white rounded-xl shadow-sm p-8">

                    <h2 className="text-2xl font-bold text-gray-800">
                        Welcome to your dashboard
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Manage your tasks and stay organized.
                    </p>

                    <div className="mt-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Description</th>
                                        <th className="px-4 py-2">Status</th>
                                        <th className="px-4 py-2">Priority</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appiontments.map((appointment) => (
                                        <tr key={appointment.id} className="border-x-2 border-b border-gray-200 rounded-lg border-gray-700">
                                            <td className="px-4 py-2">{appointment.title}</td>
                                            <td className="px-4 py-2">{appointment.description}</td>
                                            <td className="px-4 py-2">{appointment.status.toUpperCase()}</td>
                                            <td className="px-4 py-2">{appointment.priority.toUpperCase()}</td>
                                            <td className="px-4 py-2">
                                                <button
                                                    type="button"
                                                    className="px-4 py-2
                                                       bg-blue-500
                                                       hover:bg-blue-600
                                                       text-white
                                                       font-semibold
                                                       rounded-lg
                                                       transition
                                                       cursor-pointer"
                                                    onClick={() => handleEdit(appointment.id)}
                                                >
                                                    <MdEdit />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="px-4 py-2
                                                       bg-red-500
                                                       hover:bg-red-600
                                                       text-white
                                                       font-semibold
                                                       rounded-lg
                                                       transition
                                                       cursor-pointer"
                                                    onClick={() => handleDelete(appointment.id)}
                                                >
                                                    <MdDelete />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="px-4 py-2
                                                       bg-green-500
                                                       hover:bg-green-600
                                                       text-white
                                                       font-semibold
                                                       rounded-lg
                                                       transition
                                                       cursor-pointer"
                                                    onClick={() => handleView(appointment.id)}
                                                >
                                                    <MdPassword />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </section>
        </div >
    );
};

export default TodoAllTask;