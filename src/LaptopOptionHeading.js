import React from 'react';

export default function LaptopOptionHeading ( props ) {
    return (
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
    )
}