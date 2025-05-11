import React from "react";
import "./style.css";

export const DivWrapper = ({title,description}) => {
    console.log(title, description);
    return (
        <div className="div-wrapper">
            <div className="frame">
                <div className="text-wrapper">{title}</div>

                <p className="div">
                    {description}
                </p>
            </div>

            <div className="ellipse" />
        </div>
    );
};
