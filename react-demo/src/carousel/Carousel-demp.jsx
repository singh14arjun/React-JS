import { useEffect, useRef, useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import axios from "axios";
const CarouselDemo = () => {

    const [product, setProduct] = useState();

    const productId = useRef(1);

    const threadId = useRef(null);

    function loadProduct(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))

    }
    // console.log("product", product);

    useEffect(() => {
        loadProduct(1);
    }, [])

    function handleNext() {
        if (productId.current < 20) {
            productId.current = productId.current + 1;
            loadProduct(productId.current);
            // console.log("value", productId.current);
        }
    }

    function handlePrevious() {
        if (productId.current > 1) {
            productId.current = productId.current - 1;
            loadProduct(productId.current);
        }
    }

    // threadId.current = setInterval(loadProduct(productId.current), 2000);
    return (
        <div>
            <h1>Carousel Demo</h1>
            <div className="bg-gray-100 border border-gray-300 w-200 mx-auto p-20 rounded-lg">
                <p className="h-20 overflow-hidden text-center text-xl font-semibold">{product?.title}</p>
                <div className="flex justify-between items-center gap-20">

                    <div className={`bg-gray-300 p-2 rounded-full border  ${productId.current === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={handlePrevious}>
                        <GrFormPreviousLink />
                    </div>
                    <div className="flex flex-col justify-center items-center relative w-150 h-80">
                        <p className="text-green-600 font-bold border border-green-600 p-2 rounded-full bg-green-100 absolute top-0 right-0">{product?.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
                        <img src={product?.image} alt={product?.title} className="w-150 h-80" />
                    </div>
                    <div className={`bg-gray-300 p-2 rounded-full border  ${productId.current === 20 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={handleNext}>
                        <GrFormNextLink />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarouselDemo;