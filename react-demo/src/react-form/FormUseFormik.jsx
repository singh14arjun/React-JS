import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from "yup"
import { FaEyeSlash, FaEye } from "react-icons/fa"

const FormUseFormik = () => {

    const [user, setUser] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            email: "",
            mobile: "",
            city: "",
            gender: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required")
                .min(3, "First Name must be at least 3 characters long")
                .max(10, "First Name must be at most 10 characters long"),
            lastName: Yup.string().required("Last Name is required")
                .min(3, "Last Name must be at least 3 characters long")
                .max(10, "Last Name must be at most 10 characters long"),
            password: Yup.string().required("Password is required")
                .min(8, "Password must be at least 8 characters long")
                .max(16, "Password must be at most 16 characters long"),
            confirmPassword: Yup.string().required("Confirm Password is required")
                .oneOf([Yup.ref('password'), null], "Passwords do not match"),
            email: Yup.string().required("Email is required")
                .email("Invalid Email"),
            mobile: Yup.string().required("Mobile is required")
                .min(10, "Mobile must be at least 10 digits long")
                .max(10, "Mobile must be at most 10 digits long"),
            city: Yup.string().required("City is required").min(3, "City must be at least 3 characters long").max(10, "City must be at most 10 characters long"),
            gender: Yup.string().required("Gender is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            setUser([...user, values]);
        },
        onReset: () => {
            values.firstName = "";
            values.lastName = "";
            values.password = "";
            values.confirmPassword = "";
            values.email = "";
            values.mobile = "";
            values.city = "";
            values.gender = "";
            setShowPassword(false);
            setShowConfirmPassword(false);
            console.log("Form Reset");
        }


    })
    const { handleChange, handleBlur, handleSubmit, values, errors, touched, dirty } = formik;

    return (
        <div>
            <div className="w-2/3 md:w-1/3 mx-auto bg-gray-800 p-5 rounded-lg">
                <h1 className="text-center text-2xl font-bold mb-5 text-white">Registration Form</h1>
                <hr className="mb-5 text-white/50" />

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-2 mb-2">

                        <div className="flex flex-col gap-2">

                            <label htmlFor="firstName" className="text-white">First Name</label>
                            <input type="text"
                                name="firstName"
                                id="firstName"
                                {...formik.getFieldProps("firstName")}
                                className="border rounded p-2"
                            />
                            {touched.firstName && errors.firstName ? <div className="text-red-500">{errors.firstName}</div> : null}
                        </div>
                        <div className="flex flex-col gap-2">

                            <label htmlFor="lastName" className="text-white">Last Name</label>
                            <input type="text"
                                name="lastName"
                                id="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border rounded p-2"
                            />
                            {touched.lastName && errors.lastName ? <div className="text-red-500">{errors.lastName}</div> : null}

                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 items-start">
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="password" className="text-white">Password</label>
                            <div className="relative flex items-center">
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border rounded p-2 w-full text-white" />
                                <div className="absolute right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                                </div>
                            </div>
                            {touched.password && errors.password ? <div className="text-red-500">{errors.password}</div> : null}
                        </div>

                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
                            <div className="relative flex items-center">
                                <input type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border rounded p-2 w-full text-white" />
                                <div className="absolute right-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                                </div>
                            </div>
                            {touched.confirmPassword && errors.confirmPassword ? <div className="text-red-500">{errors.confirmPassword}</div> : null}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-2">

                        <label htmlFor="email" className="text-white">Email</label>
                        <input type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border rounded p-2" />
                        {touched.email && errors.email ? <div className="text-red-500">{errors.email}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 mb-2">

                        <label htmlFor="mobile" className="text-white">Mobile</label>
                        <input type="text"
                            name="mobile"
                            id="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border rounded p-2" />
                        {touched.mobile && errors.mobile ? <div className="text-red-500">{errors.mobile}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 mb-2">

                        <label htmlFor="city" className="text-white">City</label>
                        <input type="text"
                            name="city"
                            id="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border rounded p-2" />
                        {touched.city && errors.city ? <div className="text-red-500">{errors.city}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                        <label className="text-white">Gender</label>
                        <div className="flex items-center gap-4 mt-1 mb-2">
                            <label htmlFor="genderMale" className="flex items-center cursor-pointer text-white">
                                <input type="radio"
                                    name="gender"
                                    id="genderMale"
                                    value="male"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="mr-2" />
                                Male
                            </label>
                            <label htmlFor="genderFemale" className="flex items-center cursor-pointer text-white">
                                <input type="radio"
                                    name="gender"
                                    id="genderFemale"
                                    value="female"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="mr-2" />
                                Female
                            </label>
                        </div>
                        {touched.gender && errors.gender ? <div className="text-red-500">{errors.gender}</div> : null}
                    </div>

                    <div className="flex justify-center gap-10">
                        <button disabled={formik.isValid ? false : true} type="submit" className={`p-2 rounded text-white cursor-pointer ${!formik.isValid ? "bg-blue-500" : "bg-gray-500 cursor-not-allowed"}`}>Submit</button>
                        <button type="reset" className="bg-red-500 p-2 rounded text-white cursor-pointer">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormUseFormik