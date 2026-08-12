import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TodoEdit = () => {
    const [task, setTask] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();
    const [isPending, startTransition] = useTransition();

    const validationSchema = Yup.object({
        title: Yup.string()
            .trim()
            .required("Title is required"),

        description: Yup.string()
            .trim()
            .required("Description is required"),

        status: Yup.string()
            .required("Status is required"),

        priority: Yup.string()
            .required("Priority is required")
    });

    useEffect(() => {
        axios
            .get(`http://localhost:3000/appointments/${id}`)
            .then((res) => {
                console.log("Task:", res.data);
                setTask(res.data);
            })
            .catch((err) => {
                console.error("Failed to get task:", err);
                toast.error("Failed to load task");
            });
    }, [id]);

    if (!task) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg font-semibold">
                    Loading task...
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="w-1/2 mx-auto border p-5 mt-10 rounded-lg shadow-lg bg-white">

                <h1 className="text-2xl font-bold mb-5 text-center">
                    Edit Task
                </h1>

                <hr className="mb-5" />

                <Formik
                    initialValues={{
                        title: task.title || "",
                        description: task.description || "",
                        status: task.status || "",
                        priority: task.priority || ""
                    }}
                    validationSchema={validationSchema}
                    enableReinitialize={true}
                    onSubmit={async (values, { setSubmitting }) => {
                        startTransition(async () => {

                            try {

                                const updatedTask = {
                                    ...task,
                                    title: values.title.trim(),
                                    description: values.description.trim(),
                                    status: values.status,
                                    priority: values.priority
                                };

                                console.log("Updating task:", updatedTask);

                                const response = await axios.put(
                                    `http://localhost:3000/appointments/${id}`,
                                    updatedTask
                                );

                                console.log("Update response:", response.data);

                                toast.success("Task updated successfully");

                                navigate("/dashboard");

                            } catch (error) {

                                console.error(
                                    "Failed to update task:",
                                    error
                                );

                                toast.error(
                                    error.response?.data?.message ||
                                    "Failed to update task"
                                );

                            } finally {
                                setSubmitting(false);
                            }
                        })
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                        isSubmitting
                    }) => (

                        <Form className="flex flex-col gap-2">

                            {/* Title */}
                            <div className="flex flex-col gap-2">

                                <label className="font-semibold">
                                    Title
                                </label>

                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.title && touched.title
                                            ? "border-red-500 border p-2 rounded"
                                            : "border-gray-300 border p-2 rounded"
                                    }
                                />

                                {errors.title && touched.title && (
                                    <p className="text-red-500">
                                        {errors.title}
                                    </p>
                                )}

                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">

                                <label className="font-semibold">
                                    Description
                                </label>

                                <textarea
                                    id="description"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows="5"
                                    className={
                                        errors.description &&
                                            touched.description
                                            ? "border-red-500 border p-2 rounded"
                                            : "border-gray-300 border p-2 rounded"
                                    }
                                />

                                {errors.description &&
                                    touched.description && (
                                        <p className="text-red-500">
                                            {errors.description}
                                        </p>
                                    )}

                            </div>

                            {/* Status + Priority */}
                            <div className="flex justify-between gap-2">

                                {/* Status */}
                                <div className="flex flex-col gap-2 w-1/2">

                                    <label className="font-semibold">
                                        Status
                                    </label>

                                    <select
                                        id="status"
                                        name="status"
                                        value={values.status}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.status && touched.status
                                                ? "border-red-500 border p-2 rounded"
                                                : "border-gray-300 border p-2 rounded"
                                        }
                                    >
                                        <option value="">
                                            Select Status
                                        </option>

                                        <option value="ongoing">
                                            Ongoing
                                        </option>

                                        <option value="pending">
                                            Pending
                                        </option>

                                        <option value="completed">
                                            Completed
                                        </option>
                                    </select>

                                    {errors.status && touched.status && (
                                        <p className="text-red-500">
                                            {errors.status}
                                        </p>
                                    )}

                                </div>

                                {/* Priority */}
                                <div className="flex flex-col gap-2 w-1/2">

                                    <label
                                        htmlFor="priority"
                                        className="font-semibold"
                                    >
                                        Priority
                                    </label>

                                    <select
                                        id="priority"
                                        name="priority"
                                        value={values.priority}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.priority &&
                                                touched.priority
                                                ? "border-red-500 border p-2 rounded"
                                                : "border-gray-300 border p-2 rounded"
                                        }
                                    >
                                        <option value="">
                                            Select Priority
                                        </option>

                                        <option value="high">
                                            High
                                        </option>

                                        <option value="medium">
                                            Medium
                                        </option>

                                        <option value="low">
                                            Low
                                        </option>
                                    </select>

                                    {errors.priority &&
                                        touched.priority && (
                                            <p className="text-red-500">
                                                {errors.priority}
                                            </p>
                                        )}

                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="flex gap-10 justify-end mt-5">

                                <button
                                    type="button"
                                    className="bg-red-500 px-5 py-2 rounded font-bold text-white hover:bg-red-600 cursor-pointer"
                                    onClick={() =>
                                        navigate("/dashboard")
                                    }
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className={`px-5 py-2 rounded font-bold text-white ${isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-green-500 hover:bg-green-600 cursor-pointer"
                                        }`}
                                >
                                    {isPending
                                        ? "Updating..."
                                        : "Update"}
                                </button>

                            </div>

                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
};

export default TodoEdit;