import React from 'react';

export default function Cart ( props ) {
    console.log(props)
    return (
            <>
            <h2>Your cart</h2>
            {props.summary}
            </>
    )

}
