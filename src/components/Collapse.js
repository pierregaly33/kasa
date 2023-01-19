import React from "react";
import { useState } from "react";

const Collapse = () => {
    const [hidden, setHidden] = useState(false);
    const handleShow = () => {
        setHidden(!hidden);
    };
    return (
        <section>
            <div className="collapse" onClick={handleShow}>
                test - {`hidden = ${hidden}`}
                <div className={`${hidden ? "hide" : "show"}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam.
                </div>
            </div>
        </section>
    );
};

export default Collapse;
