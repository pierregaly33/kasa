import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/img/logoBanner.png";

const Headers = () => {
    return (
        <header className="navbar_main">
            <img src={image} alt="logo" />
            <nav className="navbar">
                <ul>
                    <NavLink className="accueil" to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink className="about" to="/about">
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Headers;
