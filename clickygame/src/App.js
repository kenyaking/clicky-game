import React from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './Images'

class App extends React.Component {
  render (){ 

    const imagesList = ["beach.jpg", "blueberry.jpg", "butterfly.jpg", "flower.jpg", "fruit.jpg","ice-cream.jpg", "mineral-water.jpg", "pink-lemonade.jpg", "raspberry.jpg", "rose.jpg", "salad.jpg", "summer.jpg"]
    return (
      <div className="App">
     
          <h1>Click an image to begin</h1>
          <p>Score: 0 | Top Score: 0</p>
          <div>
            <Images clickyimages= {imagesList}/> 
          </div>
         
      </div>
    );
  }
  
}

export default App;
