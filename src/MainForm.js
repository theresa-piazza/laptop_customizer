import React from 'react';
import LaptopOptionHeading from './LaptopOptionHeading';
import Option from './Option';
import slugify from 'slugify';
import features from './features';


export default class MainForm extends React.Component ( ) {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    render () {

    return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
        { 
          Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <fieldset className="feature" key={this.props.featureHash}>
                <LaptopOptionHeading
                  feature={this.props.feature} />
                {
                  this.props.features[feature].map((item, idx) => {
                    const itemHash = slugify(JSON.stringify(item));
                    return ( <Option 
                                itemHash={this.props.itemHash}
                                item={this.props.item}
                                selected={this.props.this.state.selected}
                                feature={this.props.feature} 
                                updateFeature={this.props.this.updateFeature}
                                key={this.props.idx}/>);
                    })
                }
              </fieldset>
            );
          })
        }
      </form>
    )
    }
}