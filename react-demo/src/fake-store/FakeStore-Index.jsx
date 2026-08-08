import { Routes, Route, BrowserRouter } from "react-router-dom";
import FakeStoreProducts from "./fakestore-products";
import FakeStoreDetails from "./fakestore-details";
import FakeStoreHome from "./FakeStore-home";

const FakeStoreIndex = () => {
    return (
        <div>
            <BrowserRouter>
                <h1>Fake Store Index</h1>

                <div>


                    <Routes>
                        <Route path="/" element={<FakeStoreHome />} />
                        <Route path="/products/:category" element={<FakeStoreProducts />} />
                        <Route path="/products/:category/:id" element={<FakeStoreDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default FakeStoreIndex;