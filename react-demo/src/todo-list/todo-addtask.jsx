
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

export default function TodoAddTask() {
    const navigate = useNavigate();

    const [cookies] = useCookies(["user"]);

    const userId = cookies?.user?.id;

    const validationSchema = Yup.object({
        title: Yup.string()
            .trim()
            .required("Title is required")
            .min(3, "Title must be at least 3 characters")
            .max(100, "Title must not exceed 100 characters"),

        description: Yup.string()
            .trim()
            .required("Description is required")
            .min(10, "Description must be at least 10 characters")
            .max(500, "Description must not exceed 500 characters"),

        status: Yup.string()
            .required("Status is required")
            .oneOf(
                ["pending", "ongoing", "completed"],
                "Please select a valid status"
            ),

        priority: Yup.string()
            .required("Priority is required")
            .oneOf(
                ["low", "medium", "high"],
                "Please select a valid priority"
            )
    });

    const initialValues = {
        title: "",
        description: "",
        status: "",
        priority: ""
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            if (!userId) {
                toast.error("User ID not found. Please login again.");
                return;
            }

            const taskData = {
                userId: userId,
                title: values.title.trim(),
                description: values.description.trim(),
                status: values.status,
                priority: values.priority
            };

            console.log("Task Data:", taskData);

            const response = await axios.post(
                "http://localhost:3000/appointments",
                taskData
            );

            console.log("Response:", response);

            toast.success("Task created successfully");

            resetForm();

            navigate("/dashboard");

        } catch (error) {
            console.error("Failed to create task:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to create task"
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">

            <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6">

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Add New Task
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Create a new task for your Todo list.
                    </p>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnBlur={true}
                    validateOnChange={true}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                        isValid,
                        dirty,
                        isSubmitting
                    }) => {

                        const isFormValid =
                            isValid &&
                            dirty &&
                            values.title.trim() !== "" &&
                            values.description.trim() !== "" &&
                            values.status !== "" &&
                            values.priority !== "" &&
                            !!userId &&
                            !isSubmitting;

                        return (
                            <Form
                                className="flex flex-col gap-5"
                                autoComplete="off"
                            >

                                {/* Title */}
                                <div className="flex flex-col gap-2">

                                    <label
                                        htmlFor="title"
                                        className="font-semibold text-gray-700"
                                    >
                                        Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter task title"
                                        className={`w-full border rounded-lg p-3 outline-none transition
                                            ${errors.title &&
                                                touched.title
                                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                            }
                                        `}
                                    />

                                    {errors.title && touched.title && (
                                        <p className="text-red-500 text-sm">
                                            {errors.title}
                                        </p>
                                    )}

                                </div>

                                <div className="flex flex-col gap-2">

                                    <label
                                        htmlFor="description"
                                        className="font-semibold text-gray-700"
                                    >
                                        Description
                                    </label>

                                    <textarea
                                        name="description"
                                        id="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows="5"
                                        placeholder="Enter task description"
                                        className={`w-full border rounded-lg p-3 outline-none resize-none transition
                                            ${errors.description &&
                                                touched.description
                                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                            }
                                        `}
                                    />

                                    {errors.description && touched.description && (
                                        <p className="text-red-500 text-sm">
                                            {errors.description}
                                        </p>
                                    )}

                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-2 w-[48%]">

                                        <label
                                            htmlFor="status"
                                            className="font-semibold text-gray-700"
                                        >
                                            Status
                                        </label>

                                        <select
                                            name="status"
                                            id="status"
                                            value={values.status}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full border rounded-lg p-3 bg-white outline-none cursor-pointer transition
                                            ${errors.status &&
                                                    touched.status
                                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                                }
                                        `}
                                        >
                                            <option value="">
                                                Select Status
                                            </option>

                                            <option value="pending">
                                                Pending
                                            </option>

                                            <option value="ongoing">
                                                Ongoing
                                            </option>

                                            <option value="completed">
                                                Completed
                                            </option>
                                        </select>

                                        {errors.status && touched.status && (
                                            <p className="text-red-500 text-sm">
                                                {errors.status}
                                            </p>
                                        )}

                                    </div>
                                    <div className="flex flex-col gap-2 w-[48%]">
                                        <label
                                            htmlFor="priority"
                                            className="font-semibold text-gray-700"
                                        >
                                            Priority
                                        </label>

                                        <select
                                            name="priority"
                                            id="priority"
                                            value={values.priority}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full border rounded-lg p-3 bg-white outline-none cursor-pointer transition
                                            ${errors.priority &&
                                                    touched.priority
                                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                                }
                                        `}
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

                                        {errors.priority && touched.priority && (
                                            <p className="text-red-500 text-sm">
                                                {errors.priority}
                                            </p>
                                        )}

                                    </div>
                                </div>


                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid}
                                        className={`px-5 py-3 rounded-lg font-semibold text-white transition
                                            ${isFormValid
                                                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                                                : "bg-gray-400 cursor-not-allowed"
                                            }
                                        `}
                                    >
                                        {isSubmitting
                                            ? "Adding Task..."
                                            : "Add Task"}
                                    </button>

                                    <Link
                                        to="/dashboard"
                                        className="px-5 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                                    >
                                        Cancel
                                    </Link>

                                </div>
                                {!userId && (
                                    <p className="text-red-500 text-sm">
                                        User ID not found. Please login again.
                                    </p>
                                )}

                            </Form>
                        );
                    }}
                </Formik>

            </div>

        </div>
    );
};

