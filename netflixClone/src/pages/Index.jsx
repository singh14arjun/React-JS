import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

const Index = () => {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 z-10">
                <Navbar />
                <Home />
            </div>
            <Footer />
        </>
    )
}

export default Index