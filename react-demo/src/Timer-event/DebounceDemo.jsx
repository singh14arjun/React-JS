import { useRef, useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";

const DebounceDemo = () => {

    const [message, setMessage] = useState("");


    const timerId = useRef(null);

    function level1() {
        setMessage("Level 1")
    }
    function level2() {
        setMessage("Level 2")
    }
    function level3() {
        setMessage("Level 3")
    }

    function VolumeUp() {
        timerId.current = setTimeout(level1, 3000);
        timerId.current = setTimeout(level2, 6000);
        timerId.current = setTimeout(level3, 10000);
    }

    function cancelTask() {
        clearTimeout(timerId.current);
        setMessage("Task Cancelled");
    }
    return (
        <div className="m-10">
            <h1>Debounce Demo</h1>
            <p className="bg-yellow-500 w-fit p-2 rounded"><FaVolumeHigh onClick={VolumeUp} /></p>

            <p>{message}</p>

            <button onClick={cancelTask} className="bg-red-500 w-fit p-2 rounded">Cancel Task</button>
        </div>
    )
}

export default DebounceDemo