import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import MainPage from './pages/MainPage';

const PLACES = [
  { name: "Bitcoin", zip: "btc" },
  { name: "Ethereum", zip: "eth" },
  { name: "Litecoin", zip: "ltc" },
  { name: "Binance USD", zip: "busd" }
];



class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
              {place.name}
          </button>
        ))}
        <MainPage
          key={activePlace}
          zip={PLACES[activePlace].zip}
        />
      </div>
    );
  }
}


export default App;



