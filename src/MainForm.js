import React from 'react';
import Features from './Features';
import Specs from './Specs';

function MainForm( props ){
    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            { 
              Object.keys(Features).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                return (
                  <Specs 
                    key={featureHash} 
                    feature={feature} 
                    selected={props.selected} 
                    updateFeature={props.updateFeature}/>
                );
              })
            }
          </form>
    );
}

export default MainForm;