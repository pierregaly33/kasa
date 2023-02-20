import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Logements from "../datas/Logements.json";
import Error from "../pages/Error";

const Fichelogement = () => {
    let { id } = useParams();
    const logement = Logements.find((logement) => logement.id === id);
    if (!logement) {
        return <Error />;
    }
    return (
        <>
            <div className="fichelogement">
                <Carousel images={logement.pictures} />
                <div className="fichelogement_content">
                    <div className="logement_information">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                        <div className="main_tags">
                            {logement.tags.map((tag, index) => {
                                return <Tag key={index} text={tag} />;
                            })}
                        </div>
                    </div>
                    <div className="host_and_rate">
                        <Host host={logement.host} />
                        <Rating rating={logement.rating} />
                    </div>
                </div>
                <div className="collapse_main">
                    <Collapse title="Description :">
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse title="Equipements">
                        {logement.equipments.map((equipement, index) => {
                            return <p key={index}>{equipement}</p>;
                        })}
                    </Collapse>
                </div>
            </div>
        </>
    );
};

export default Fichelogement;
