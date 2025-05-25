import React from 'react';

export const ButtonList = ({ buttons, selected, setSelected }) => (
  <div className="property-wrapper">
    <div className="property-wrapper div">
      {buttons.map((name, idx) => (
        <div
          className={`property-wrapper frame${selected === idx ? " active" : ""}`}
          key={idx}
          onClick={() => setSelected(idx)}
        >
          <div className="property-wrapper text-wrapper">
            {name}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ButtonList;