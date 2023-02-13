import React from "react";
import image from "../assets/img/logoFooter.png";

const Footer = () => {
    return (
        <footer className="footer_container">
            <img src={image} alt="logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    );
};

export default Footer;
