import React from 'react';
import Cart from './Cart';
import Total from './Total';

export default function MainSummary (props) {
    
    return (
    <section className="main__summary">
        <Cart 
            summary={props.summary} />
        <Total
            total={props.total} />

    </section>
    )

}
