import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TodoRegister = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        fullName: Yup.string()
            .trim()
            .required("Full Name is required")
            .min(3, "Full Name must be at least 3 characters")
            .max(30, "Full Name must not exceed 30 characters"),

        email: Yup.string()
            .trim()
            .required("Email is required")
            .email("Invalid email address"),

        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(30, "Password must not exceed 30 characters")
    });

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Register Data:", values);

        axios.post("http://localhost:3000/users", values)
            .then((response) => {
                console.log("Register Response:", response.data);
                toast.success("Register Successfully");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Register Error:", error);
                toast.error("Register Failed");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div className="w-full">

            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Todo Register
                </h1>

                <p className="text-gray-500 mt-2">
                    Create your account
                </p>
            </div>

            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    password: ""
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnBlur={true}
                validateOnChange={true}
            >
                {({
                    errors,
                    touched,
                    values,
                    isValid,
                    dirty,
                    isSubmitting
                }) => {

                    const isFormValid =
                        isValid &&
                        dirty &&
                        values.fullName.trim() !== "" &&
                        values.email.trim() !== "" &&
                        values.password.trim() !== "" &&
                        !isSubmitting;

                    return (
                        <Form className="space-y-5">

                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Full Name
                                </label>

                                <Field
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    className={`w-full px-4 py-3 rounded-lg border outline-none transition
                                        ${errors.fullName &&
                                            touched.fullName
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        }
                                    `}
                                />

                                {errors.fullName && touched.fullName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email
                                </label>

                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    className={`w-full px-4 py-3 rounded-lg border outline-none transition
                                        ${errors.email &&
                                            touched.email
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        }
                                    `}
                                />

                                {errors.email && touched.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <Field
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        autoComplete="new-password"
                                        className={`w-full px-4 py-3 pr-20 rounded-lg border outline-none transition
                                            ${errors.password &&
                                                touched.password
                                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                            }
                                        `}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-blue-800"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>

                                </div>

                                {errors.password && touched.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full py-3 rounded-lg font-semibold text-white transition
                                    ${isFormValid
                                        ? "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
                                        : "bg-gray-400 cursor-not-allowed"
                                    }
                                `}
                            >
                                {isSubmitting
                                    ? "Creating Account..."
                                    : "Register"}
                            </button>

                        </Form>
                    );
                }}
            </Formik>

        </div>
    );
};

export default TodoRegister;
