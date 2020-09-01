import React from 'react';
import LaptopOptionHeading from './LaptopOptionHeading';
import Option from './Option';
import slugify from 'slugify';


export default function MainForm ( props ) {
    return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
        { 
          Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <fieldset className="feature" key={props.featureHash}>
                <LaptopOptionHeading
                  feature={props.feature} />
                {
                  this.props.features[feature].map((item, idx) => {
                    const itemHash = slugify(JSON.stringify(item));
                    return ( <Option 
                                itemHash={props.itemHash}
                                item={props.item}
                                selected={props.this.state.selected}
                                feature={props.feature} 
                                updateFeature={props.this.updateFeature}
                                key={props.idx}/>);
                    })
                }
              </fieldset>
            );
          })
        }
      </form>
    )
}