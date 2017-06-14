import React, { Component } from 'react';
import '../App.css';
import ProductGallery from './product-gallery';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            Berry num num..
          </h1>
        </div>
        <ProductGallery />
      </div>

    );
  }
}

export default App;
