import { useState } from "react"
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"

const ControlledComponentGrid = (props) => {

    const [products, setProducts] = useState(props.products)
    const [empolyee, setEmpoloyee] = useState(props.empolyee)

    return (
        <div className="bg-gray-100 m-10 p-10">
            <div>

                <h1>{props?.dataName}</h1>
                <table border="1">
                    <thead>
                        <tr className="grid grid-cols-3 border">
                            <th className="text-left border">Names</th>
                            <th className="text-left border">Price</th>
                            <th className="text-center border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => (
                            <tr key={product?.name} className="grid grid-cols-3">
                                <td className="text-left border">{product?.name}</td>
                                <td className="text-left border">{product?.price.toLocaleString('en-IN', { style: "currency", currency: "INR" })}</td>
                                <td className="flex gap-5 justify-center border ">
                                    <FaTrash className="bg-red-500 p-2 my-1 text-white rounded cursor-pointer" size={30} />
                                    <FaEdit className="bg-blue-500 p-2 my-1 text-white rounded cursor-pointer" size={30} />
                                    <FaEye className="bg-green-500 p-2 my-1 text-white rounded cursor-pointer" size={30} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr />
            <div>

                {/* <h1>{props?.employeeName}</h1> */}
                <table border="1" className="w-full">
                    <thead>
                        <tr className="grid grid-cols-4">
                            <th className="text-left border">First Name</th>
                            <th className="text-left border">Last Name</th>
                            <th className="text-left border">Salary</th>
                            <th className="text-center border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empolyee?.map((empolyee, index) => (
                            <tr key={index} className="grid grid-cols-4">
                                <td className="text-left border ">{empolyee?.firstName}</td>
                                <td className="text-left border">{empolyee?.lastName}</td>
                                <td className={`text-left border`}>{empolyee?.salary.toLocaleString('en-IN', { style: "currency", currency: "INR" })}</td>
                                <td className="flex gap-5 justify-center border ">
                                    <FaTrash className="bg-red-500 p-2 my-1 text-white rounded cursor-pointer" size={30} />
                                    <FaEdit className="bg-blue-500 p-2 my-1 text-white rounded cursor-pointer" size={30} />
                                    <FaEye className="bg-green-500 p-2 my-1 text-white rounded cursor-pointer" size={30} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default ControlledComponentGrid