import React, { useState } from "react";

import arrowLeft from "../assets/img/arrowLeft.png";
import arrowright from "../assets/img/arrowRight.png";

const Carousel = (props) => {
    const [carousel, setcarousel] = useState(0);
    const next = () => {
        if (carousel < props.images.length - 1) {
            setcarousel(carousel + 1);
        } else {
            setcarousel(0);
        }
    };

    const previous = () => {
        if (carousel > 0) {
            setcarousel(carousel - 1);
        } else {
            setcarousel(props.images.length - 1);
        }
    };

    return (
        <div className="carousel">
            <div className="left">
                <img onClick={previous} src={arrowLeft} alt="" />
            </div>
            <div className="right">
                <img onClick={next} src={arrowright} alt="" />
            </div>
            {/* <img src={props.urls[carousel]} alt="" /> */}
            {props.images.map((image, index) => {
                const currentIndex = index;
                return (
                    <div key={index} className={`${carousel === index ? "active" : "inactive"}`}>
                        <img className="img_carousel" src={image} alt="" />
                        <p className="compteur">
                            {currentIndex + 1} / {props.images.length}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;
