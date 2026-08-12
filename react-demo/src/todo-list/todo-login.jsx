
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function TodoLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    const initialValues = {
        username: "",
        password: ""
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .trim()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters")
            .max(30, "Username must not exceed 30 characters"),

        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(30, "Password must not exceed 30 characters")
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("Login Data:", values);
            const response = await axios.get("http://localhost:3000/users");
            const users = response.data;
            const user = users.find(
                (user) =>
                    user.email === values.username &&
                    user.password === values.password
            );
            if (user) {
                setCookie("user", user, {
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7,
                    sameSite: "lax"
                });
                toast.success("Login Successful");
                navigate("/dashboard");
            } else {
                toast.error("Invalid Credentials");
            }


        } catch (error) {
            console.error("Login failed:", error);
            toast.error("Login Failed");
            setSubmitting(false);
        } finally {
            setSubmitting(false);
        }
    };

    return (

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Todo Login
                </h1>

                <p className="text-gray-500 mt-2">
                    Login to manage your tasks
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
                        values.username.trim() !== "" &&
                        values.password.trim() !== "" &&
                        !isSubmitting;

                    return (
                        <Form className="space-y-5" autoComplete="off">

                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Username
                                </label>

                                <Field
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    autoComplete="username"
                                    className={`w-full px-4 py-3 rounded-lg border outline-none transition
                                            ${errors.username &&
                                            touched.username
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        }
                                        `}
                                />

                                {errors.username && touched.username && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.username}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <Field
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
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
                                        className="absolute right-3 top-1/2 -translate-y-1/2
                                                text-sm font-medium text-blue-600
                                                hover:text-blue-800 transition"
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

                            {/* Forgot Password */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Login Button */}
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
                                    ? "Logging in..."
                                    : "Login"}
                            </button>

                        </Form>
                    );
                }}
            </Formik>


        </div>
    );
};

