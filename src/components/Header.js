import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/img/logoBanner.png";

const Headers = () => {
    return (
        <header className="main">
            <img src={image} alt="logo" />
            <nav className="navbar">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Headers;
