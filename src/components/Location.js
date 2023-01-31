import React from "react";
import { NavLink } from "react-router-dom";
import logement from "../datas/Logements.json";

const Location = () => {
    return (
        <section className="product_location">
            {logement.map((logement) => {
                return (
                    <article key={logement.id}>
                        <NavLink to={`/logements/${logement.id}`}>
                            <div className="cards">
                                <img className="img_card" src={logement.cover} alt="Photo_location" />
                                <div className="overlay_card"></div>
                                <h2 className="title_card">{logement.title}</h2>
                            </div>
                        </NavLink>
                    </article>
                );
            })}
        </section>
    );
};

export default Location;
