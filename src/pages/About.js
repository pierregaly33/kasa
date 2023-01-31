import React from "react";
import image from "../assets/img/imgAbout.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Data from "../datas/about.json";

const About = () => {
    return (
        <>
            <Banner image={image} />
            <section>
                {Data.map((data) => (
                    <Collapse key={data.id} title={data.title}>
                        <p>{data.text}</p>
                    </Collapse>
                ))}
            </section>
        </>
    );
};

export default About;
