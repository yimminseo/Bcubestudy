import React from "react";
import "./style.css";

// Element.js
export const Element = ({ items }) => {
    return (
        <div className="element">
            <div className="frame">
                {items.map((item, id) => (
                    <div key={id} className="div">
                        <img src={item.imagePath} alt={item.title} className="slide-2" />

                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="text-wrapper">{item.year}</div>
                                <div className="text-wrapper-2">{item.title}</div>
                                <div className="text-wrapper-3">{item.participant}</div>
                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
