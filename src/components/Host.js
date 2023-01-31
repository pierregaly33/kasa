import React from "react";

const Host = (props) => {
    const hostSplited = props.host.name.split(" ");
    const [name, lastname] = hostSplited;
    return (
        <div className="host">
            <div className="host_name">
                <p>{name}</p>
                <p>{lastname}</p>
            </div>
            <img src={props.host.picture} alt="" />
        </div>
    );
};

export default Host;
