import { FaCartPlus } from "react-icons/fa";

const Navbar = (props) => {
    return (
        <div>
            <h1 className={`font-bold text-2xl cursor-pointer w-fit mx-auto py-4 ${props.nameStyle}`} >{props.name}</h1>
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
                <img src={props.logo} alt="" className={`logo ${props.logoClass}`} />

                <div className="flex gap-10 cursor-pointer">
                    {props.menuList.map((item) => {
                        return <p>{item}</p>;
                    })}
                </div>
                <div className="flex gap-3 cursor-pointer">
                    <p>{props.cartIcon}</p>
                    <p>{props.likedIcon}</p>
                    <p>{props.profileIcon}</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;