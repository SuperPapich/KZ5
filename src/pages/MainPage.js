import React, { Component } from 'react'

import {
    useCryptoPrices,
    useCryptoTickers,
    CryptoPriceProvider,
} from "react-realtime-crypto-prices";



const HookExample = (data) => {
  const prices = useCryptoPrices([data.currency]);
  
  const tickers = useCryptoTickers([data.currency]);
  console.log(tickers)
  return (
      <>
          <div>Live Prices</div>
          <div>{JSON.stringify(prices[data.currency])} USD</div>

          <div>Live Tickers</div>
          <div>{JSON.stringify(tickers)}</div>
      </>
  );
};




class MainPage extends Component {
  componentDidMount() {
  }
  render() {
    
    return (

      
      <div>
        <CryptoPriceProvider cryptoCompareApiKey="0W98Qtl98TipvQ5jcX0LY1cH3BVm9qupdGHMlAG5KNYncipJweExHOnhzGLcejsh">
                <HookExample currency={this.props.zip}/>
        </CryptoPriceProvider>
        <h1>
          {this.props.zip}
        </h1>
        
      </div>
    );
  }
}


export default MainPage;


