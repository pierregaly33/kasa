import React from "react";

import redStar from "../assets/img/redStar.png";
import greyStar from "../assets/img/greyStar.png";

const Rating = (props) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map((star) =>
                props.rating >= star ? (
                    <img className="stars_rating" key={star} src={redStar} alt="" />
                ) : (
                    <img className="stars_rating" key={star} src={greyStar} alt="" />
                )
            )}
        </div>
    );
};

export default Rating;
