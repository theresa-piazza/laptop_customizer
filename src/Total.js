import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function Total ( props ) {
    return (
        <>
        <div className="summary__total"></div>  
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {USCurrencyFormat.format(props.total)}
        </div> 
        </>
    )
}