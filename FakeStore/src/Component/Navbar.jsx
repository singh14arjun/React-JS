import { IoMdSearch } from "react-icons/io";
import { FaCartPlus, FaHeart, FaUser } from "react-icons/fa";

const Navbar = ({ cartCount, wishlistCount }) => {

    const navlinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Products",
            link: "/products"
        },
        {
            name: "Cart",
            link: "/cart"
        }
    ]

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">FakeStore</div>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-2 py-1" />
                        <IoMdSearch className="text-white" size={25} />
                    </div>

                    <div className="flex space-x-4">
                        {navlinks.map((link, index) => {
                            return (
                                <a key={index} href={link.link} className="text-gray-300 hover:text-white">{link.name}</a>
                            )
                        })}
                    </div>
                    <div className="flex space-x-4">
                        <div className="relative">
                            <FaHeart className="text-white cursor-pointer relative" size={25} />
                            {
                                wishlistCount > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">{wishlistCount}</span>
                                )
                            }
                        </div>
                        <div className="relative">
                            <FaCartPlus className="text-white cursor-pointer" size={25} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
                            )}
                        </div>
                        <div><FaUser className="text-white cursor-pointer" size={25} /></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;