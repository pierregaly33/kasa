import React from "react";
import { useState } from "react";
import image from "../assets/img/vectorCollapse.png";
const Collapse = (props) => {
    const [hidden, setHidden] = useState(true);
    const handleShow = () => {
        setHidden(!hidden);
    };
    return (
        <div className={`collapse ${hidden ? "collapsed" : "expended"}`} onClick={handleShow}>
            <h3 className="collapse_header">
                {props.title}
                <img src={image} alt="" />
            </h3>
            <div className="collapse_content">{props.children}</div>
        </div>
    );
};

export default Collapse;
