import React from 'react';
import ChosenLaptop from './ChosenLaptop';

export default function Cart ( props ) {
    return (
            <>
            <h2>Your cart</h2>
            {
                Object.keys(props.selected).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    const selectedOption = props.selected[feature];
                    return (
                        <ChosenLaptop 
                        key={featureHash}
                        featureHash={featureHash}
                        feature={feature}
                        selectedOption={selectedOption} />
                    );
                })
            }

            </>
    )

}