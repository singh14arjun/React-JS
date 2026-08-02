import { useState, useRef } from "react"

const ThrottleDemo = () => {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)


    let thread = useRef(null);

    function StartWatch() {
        if (thread.current) return;
        thread.current = setInterval(() => {
            setMilliseconds((prevMs) => {
                if (prevMs >= 990) {
                    setSeconds((prevSec) => {
                        if (prevSec >= 59) {
                            setMinutes((prevMin) => {
                                if (prevMin >= 59) {
                                    setHours((prevHour) => prevHour + 1);
                                    return 0;
                                }
                                return prevMin + 1;
                            });
                            return 0;
                        }
                        return prevSec + 1;
                    });
                    return 0;
                }
                return prevMs + 10;
            });
        }, 10);
    }

    function PauseWatch() {
        clearInterval(thread.current);
        thread.current = null;
    }

    function ResetWatch() {
        clearInterval(thread.current);
        thread.current = null;
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setMilliseconds(0);
    }

    return (
        <div className="p-10 bg-gray-900 h-screen">
            <h1 className="text-4xl text-center pb-10 font-bold text-white">Stop Watch </h1>
            <div className="items-center justify-center bg-cyan-800 w-fit mx-auto p-5 rounded-xl shadow-lg shadow-cyan-800">

                <div className="flex gap-5 items-center justify-center">
                    <div className="w-20 h-20 bg-red-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg shadow-red-500">{hours}</div>
                    <div className="text-2xl flex items-center justify-center font-bold text-white">:</div>
                    <div className="w-20 h-20 bg-green-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg shadow-green-500">{minutes}</div>
                    <div className="text-2xl flex items-center justify-center font-bold text-white">:</div>
                    <div className="w-20 h-20 bg-blue-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg shadow-blue-500">{seconds}</div>
                    <div className="text-2xl flex items-center justify-center font-bold text-white">:</div>
                    <div className="w-20 h-20 bg-cyan-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg shadow-cyan-500">{milliseconds}</div>
                </div>
                <div className="flex gap-5 mt-5 items-center justify-between py-10">
                    <button className="bg-green-500 text-xl font-semibold text-white px-8 py-4 rounded hover:bg-green-600 cursor-pointer shadow-lg shadow-green-500" onClick={StartWatch}>Start</button>
                    <button className="bg-yellow-500 text-xl font-semibold text-white px-8 py-4 rounded hover:bg-yellow-600 cursor-pointer shadow-lg shadow-blue-500" onClick={PauseWatch}>Pause</button>
                    <button className="bg-red-500 text-xl font-semibold text-white px-8 py-4 rounded hover:bg-red-600 cursor-pointer shadow-lg shadow-red-500" onClick={ResetWatch}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default ThrottleDemo