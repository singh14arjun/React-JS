import Navbar from "./Navbar";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ControlledComponentGrid from "./ControlledComponent-grid";
import { useState } from "react";
const Home = () => {


    const [products, setProducts] = useState([{
        name: "TV",
        price: 10000,
        image: "https://images.unsplash.com/photo-1523207916034-b6a545720054?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A television is an electronic device that receives broadcast signals and displays them as moving images and sound."

    }, {
        name: "Mobile",
        price: 10000,
        image: "https://images.unsplash.com/photo-1523207916034-b6a545720054?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A television is an electronic device that receives broadcast signals and displays them as moving images and sound."
    }])

    const [empolyee, setEmpoloyee] = useState([{
        firstName: "Raj",
        lastName: "Dev",
        designation: "Software Engineer",
        gender: "Male",
        salary: "10000",

    }, {
        firstName: "Riya",
        lastName: "Dev",
        designation: "Software Engineer",
        gender: "Female",
        salary: "10000",

    }
        , {
        firstName: "Riya",
        lastName: "Singh",
        designation: "Software Engineer",
        gender: "Female",
        salary: "100000",

    }, {
        firstName: "Arjun",
        lastName: "Kumar",
        designation: "Manager",
        gender: "Male",
        salary: "100000",

    }
    ])
    return (
        <div>
            <Navbar
                name="Amazon"
                nameStyle="text-orange-500"
                logo="https://static.vecteezy.com/system/resources/previews/019/136/319/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
                logoClass="logo w-50 h-12"
                menuList={["Home", "About", "Contact", "Menu"]}
                cartIcon={<FaCartPlus />}
                likedIcon={<FaHeart />}
                profileIcon={<FaUser />}
            />
            <Navbar
                name="Flipkart"
                nameStyle="text-yellow-400"
                logo="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
                logoClass="logo w-25 h-12"
                menuList={["Home", "About", "Contact"]}
                cartIcon={<FaCartPlus />}
                profileIcon={<FaUser />}
            />
            <Navbar
                name="Myntra"
                nameStyle="text-pink-600 hover:text-pink-800 "
                logo="https://images.seeklogo.com/logo-png/51/2/myntra-logo-png_seeklogo-513444.png"
                logoClass="logo w-50 h-30"
                menuList={["Home", "About", "Contact"]}
                cartIcon={<FaCartPlus />}
                profileIcon={<FaUser />}
                likedIcon={<FaHeart />}
            />

            <ControlledComponentGrid products={products} dataName="Products" empolyee={empolyee} employeeName="Employee" />
        </div>
    );
};

export default Home;