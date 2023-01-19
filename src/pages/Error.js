import React from "react";
import Header from "../components/Header";
import image from "../assets/img/404.png";

const Error = () => {
    return (
        <div className="main_header">
            <Header />
            <main className="error">
                <img src={image} alt="Erreur_404" />
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
            </main>
        </div>
    );
};

export default Error;