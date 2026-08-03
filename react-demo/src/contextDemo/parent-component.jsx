import { useState } from "react";
import ChildComponent from "./child-component";

const ParentComponent = () => {

    const [msg, setMeg] = useState("Parent message ");


    function handleMsg(message) {
        setMeg(message);
    }

    return (
        <div className="bg-gray-300 p-4">
            <h1>Parent Component</h1>
            {
                msg
            }

            <ChildComponent handleMsg={handleMsg} />
        </div>
    )
}

export default ParentComponent;