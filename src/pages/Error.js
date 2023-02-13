import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/img/404.png";

const Error = () => {
    return (
        <>
            <main className="error">
                <img src={image} alt="Erreur_404" />
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
            </main>
            <div className="retour_accueil">
                <NavLink to="/">
                    <p>Retournez sur la page d'accueil</p>
                </NavLink>
            </div>
        </>
    );
};

export default Error;
