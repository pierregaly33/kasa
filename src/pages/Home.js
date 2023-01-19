import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import image from "../assets/img/imgBanner.png";

const Home = () => {
    return (
        <>
            <Header />
            <Banner title="Chez vous, partout et ailleurs" image={image} withOverlay={true} />
        </>
    );
};

export default Home;
