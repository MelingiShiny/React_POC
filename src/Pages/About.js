import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prev_arrow from '../Images/prev_arrow.png';
import next_arrow from '../Images/next_arrow.png';
import carousel_1 from '../Images/Carousel_images/carousel_1.jpg';
import carousel_2 from '../Images/Carousel_images/carousel_2.jpg';
import carousel_3 from '../Images/Carousel_images/carousel_3.jpg';
import carousel_4 from '../Images/Carousel_images/carousel_4.jpg';
import '../Styles/About.css'

export const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: <img src={prev_arrow} alt="Previous" />,
        nextArrow: <img src={next_arrow} alt="Next" />,
    };

    const Images = [carousel_1, carousel_2, carousel_3, carousel_4]

    return (
        <div className="aboutPage">
            <div className="carouselContainer">
                <Slider {...settings}>
                    {Images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};