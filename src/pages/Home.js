import React from "react";
import Banner from "../components/Banner";
import image from "../assets/img/imgBanner.png";
import Location from "../components/Location";

const Home = () => {
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={image} withOverlay={true} />
            <Location />
        </>
    );
};

export default Home;
