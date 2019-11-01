import React from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './Images'

class App extends React.Component {

  state={
    listOfImages : []
  }

  //this function will generate 12 random numbers
  //Math.random is not really a true random function, so we try 100 times to get at least 
  //12 random numbers
  //it will add the 12 numbers to an array by using the array.push function
  //it finally returns the list of 12 numbers in the array
  randomize12Numbers = ()=>{
    let randomArray = [];
    for(let i = 1; i<=100; i++){
      const newRandomNumber = Math.ceil(Math.random() * 12);
      if (!randomArray.includes(newRandomNumber)){
        if (randomArray.length < 12){
          randomArray.push(newRandomNumber)
        }
       
      }
      
  }
  return randomArray;
}
  
 //first time when this component gets rendered, it invokes this method 
 //it generates 12 random numbers and updates react local state 'listOfImages' with that 12 number array
  componentDidMount() {
    const randomNumbers = this.randomize12Numbers();
    this.setState({listOfImages: randomNumbers});
  }
  
  //when user clicks on any image, this function gets called
  //this function will again generate a new set of 12 random numbers and update the react local state "listOfImages" with that
  clickHandler = ()=>{
    const newNumbers = this.randomize12Numbers();
    this.setState({listOfImages: newNumbers});
  }

  //every time the react local state gets updated, it invokes this render function which basically re-renders the components
  render (){ 

    const imagesList = this.state.listOfImages;
    return (
      <div className="App">
     
          <h1>Click an image to begin</h1>
          <p>Score: 0 | Top Score: 0</p>
          <div>
            <Images handleImageClick = {this.clickHandler} clickyimages= {imagesList}/> 
          </div>
         
      </div>
    );
  }
  
}

export default App;
