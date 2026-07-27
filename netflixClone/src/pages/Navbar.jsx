import NewMemberPop from "./NewMemberPop"
import netflixLogo from "../assets/netflix.svg"
const Navbar = () => {
    return (
        <div>
            <NewMemberPop />
            <div className="flex justify-between items-center py-4 px-10">
                <img src={netflixLogo} alt="" className="w-40" />
                <div className="flex gap-4">
                    <select name="" id="" className="bg-black text-white border border-white px-4 py-1 rounded">
                        <option value="">English</option>
                        <option value="">Hindi</option>
                    </select>
                    <button className="bg-red-600 text-white px-4 py-1 rounded">Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar