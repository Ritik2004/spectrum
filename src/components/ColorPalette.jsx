import React from 'react';
import './ColorPalette.css';

const ColorPalette = ({ colors }) => {
  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div key={index} className="color-item">
          <div
            className="color-box"
            style={{ backgroundColor: `rgb(${color.join(',')})` }}
          ></div>
          <div className="color-codes">
            <p>RGB: {color.join(', ')}</p>
            <p>HEX: #{color.map((c) => c.toString(16).padStart(2, '0')).join('')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
