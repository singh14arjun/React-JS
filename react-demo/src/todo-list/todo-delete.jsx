import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function TodoDelete() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        axios.get(`http://localhost:3000/appointments/${id}`)
            .then((res) => {
                setAppointment(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    function handleDelete() {
        axios.delete(`http://localhost:3000/appointments/${id}`)
            .then((res) => {
                console.log(res);
                startTransition(() => {
                    toast.success("Task deleted successfully");
                    navigate("/dashboard");
                })
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to delete task");
            })
    }

    return (
        <div>
            <div className="w-1/2 mx-auto mt-10 border border-gray-300 rounded-lg p-5 shadow-lg">

                <h1 className="text-2xl font-bold text-center">Delete Task</h1>
                <p className="text-center">Are you sure you want to delete this task?</p>
                <div className="mt-5">
                    <p className="text-lg">Title: <span className="font-semibold">{appointment?.title}</span></p>
                    <p className="text-lg">Description: <span className="font-semibold">{appointment?.description}</span></p>
                    <p className="text-lg">Status: <span className="font-semibold">{appointment?.status}</span></p>
                    <p className="text-lg">Priority: <span className="font-semibold">{appointment?.priority}</span></p>
                </div>

                <div className="flex justify-center gap-5 mt-5">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                        disabled={isPending}
                    >
                        {isPending ? "Deleting..." : "Delete"}
                    </button>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

