import React from "react";

const Banner = (props) => {
    return (
        <div className="banner">
            <img src={props.image} alt="banner" />
            {props.withOverlay && <div className="homeBanner_overlay"></div>}
            {props.title && <h2 className="hommeBanner_title">{props.title}</h2>}
        </div>
    );
};

export default Banner;
