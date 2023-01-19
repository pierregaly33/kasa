import React from "react";
import Header from "../components/Header";
import image from "../assets/img/imgAbout.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const About = () => {
    return (
        <>
            <Header />
            <Banner image={image} />
            <Collapse />
        </>
    );
};

export default About;
