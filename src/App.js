import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ChooseFeatures from './ChooseFeatures';
import Total from './Total';
import Cart from './Cart';


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
    render () {
    
    return (
      <div className="App">
        <Header />
        <main>
          <ChooseFeatures />
          <section className="main__summary">
           <Cart />
           <h2>Your cart</h2>
            {summary}
           <Total />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
