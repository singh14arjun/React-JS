import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WeatherApp from "./weather-app/weather-app";
import ReactFormDemo from "./react-form/react-form-demo";


const TutorialIndex = () => {
    return (
        <div>
            <BrowserRouter>

                <header>
                    <Link to="/">Weather App</Link>
                    <Link to="/react-form">React Form Demo</Link>
                </header>
                <Routes>
                    <Route path="/" element={<WeatherApp />} />
                    <Route path="/react-form" element={<ReactFormDemo />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default TutorialIndex