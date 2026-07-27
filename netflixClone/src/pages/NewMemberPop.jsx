import { MdLocalOffer, MdOfflineShare } from "react-icons/md"

const NewMemberPop = () => {
    return (
        <div className="flex justify-center items-center gap-2 bg-linear-to-r from-purple-500 to-red-500 ">
            <MdLocalOffer className="text-white text-2xl" />
            <h1 className="text-white text-xl text-center py-1 font-bold">New to Netflix?Try 30 days for <span className="currency-INR">₹0</span></h1>
        </div>
    )
}

export default NewMemberPop