

import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "./mouse-animation.css"
const MouseAnimation = () => {


    const [animationObject, setAnimationObject] = useState({
        animationName: "spin",
        animationDuration: "3s",
        animationTimingFunction: "linear",
        animationDelay: "0s",
        animationIterationCount: "infinite",
        animationDirection: "normal",
        animationFillMode: "none",
        animationPlayState: "running",
    })

    function handleMouseDown() {
        setAnimationObject({
            animationName: "spin",
            animationDuration: "500ms",
            animationTimingFunction: "linear",
            animationDelay: "0s",
            animationIterationCount: "infinite",
            animationDirection: "normal",
            animationFillMode: "none",
            animationPlayState: "running",
        })
    }

    function handleMouseUp() {
        setAnimationObject({
            animationName: "spin",
            animationDuration: "3s",
            animationTimingFunction: "linear",
            animationDelay: "0s",
            animationIterationCount: "infinite",
            animationDirection: "normal",
            animationFillMode: "none",
            animationPlayState: "running",
        })
    }
    return (
        <div>
            <h1>Mouse Animation</h1>
            <div className="flex justify-center items-center">
                <img src={reactLogo} alt="" width={100} height={100} style={animationObject} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
            </div>
        </div>
    )
}

export default MouseAnimation