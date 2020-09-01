import React, { Component } from 'react';
import Header from './Header';
import Option from './Option';
import LaptopOptionHeading from './LaptopOptionHeading';
import MainSummary from './MainSummary';
import ChosenLaptop from './ChosenLaptop';
import Cart from './Cart';
import Total from './Total';
import './App.css';
import slugify from 'slugify';


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
      return (
        <ChosenLaptop 
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption} />
      )
    });
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            { 
              Object.keys(this.props.features).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                return (
                  <fieldset className="feature" key={featureHash}>
                    <LaptopOptionHeading
                      feature={feature} />
                    {
                      this.props.features[feature].map(item => {
                        const itemHash = slugify(JSON.stringify(item));
                        return ( <Option 
                                    itemHash={itemHash}
                                    item={item}
                                    selected={this.state.selected}
                                    feature={feature} 
                                    updateFeature={this.updateFeature}/>);
                        })
                    }
                  </fieldset>
                );
              })
            }
          </form>
          <MainSummary />
        </main>
      </div>
    );
  }
}
export default App;