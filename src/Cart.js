import React from 'react';
import './App.css'

export default class Cart extends React.Componet {
    render () {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
            });
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature]
        
    
    return (
        <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} 
            </div>
            <div className="summary__option__value">{selectedOption.name}
            </div>
            <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
            </div>
        </div>
    )
}
    