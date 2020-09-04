import React from 'react';
import Cart from './Cart';
import Total from './Total';

export default function MainSummary (props) {
    return (
    <section className="main__summary">
        <Cart 
            selected={props.selected} />
        <Total
            selected={props.selected} />

    </section>
    )

}