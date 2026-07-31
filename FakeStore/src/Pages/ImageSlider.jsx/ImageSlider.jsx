import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AliceCarouselModule from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const AliceCarousel = AliceCarouselModule.default ? AliceCarouselModule.default : AliceCarouselModule;

const ImageSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ];

    const items = images.map((image, index) => {
        return (
            <img src={image} alt="" key={index} className="w-full h-100 object-cover" />
        )
    });

    return (
        <div>
            <AliceCarousel
                items={items}
                autoPlay
                autoPlayInterval={5000}
                infinite
                disableDotsControls
                disableButtonsControls
            />
        </div>
    );
};

export default ImageSlider;