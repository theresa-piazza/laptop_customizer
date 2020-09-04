import React from 'react';
import slugify from 'slugify';
import Feature from './Feature';
import LaptopOptionHeading from './LaptopOptionHeading';
import Features from './Features';

function Specs( props ){
    return(
        <fieldset className="feature">
            <LaptopOptionHeading
                feature={props.feature} />
            {
                Features[props.feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return ( <Feature 
                    key={itemHash}
                    itemHash={itemHash}
                    item={item}
                    selected={props.selected}
                    feature={props.feature} 
                    updateFeature={props.updateFeature}/>);
                })
            }
        </fieldset>
    );
}

export default Specs;