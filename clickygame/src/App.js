import React from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './Images'

class App extends React.Component {

  state={
    listOfImages : [], //store all images to be rendered to the screen
    userClickedImageList : [], //store all images which the user has clicked on
    userScore : 0
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
  clickHandler = (userClickedImage)=>{
    console.log('user clicked on ',userClickedImage)
    
    const existingUserSelections = this.state.userClickedImageList;
    let existingUserScore = this.state.userScore;
    
    //if the newly clicked image is already in our existing user selected state, then game is over
    if (existingUserSelections.includes(userClickedImage)){
      console.log('GAME OVER');
      this.setState({userScore:0})
    }else{
      //looks like the user successfully clicked on an image which they haven't clicked on it earlier
      //we need to increase their score by 1 
      const updatedUserScore = existingUserScore + 1;

      //we need to update existing user selection state and add this newly selected image into that
      const updatedUserSelection = [...existingUserSelections , userClickedImage];
      this.setState({userClickedImageList: updatedUserSelection, userScore : updatedUserScore})

    }

    //generate 12 new numbers
    const newNumbers = this.randomize12Numbers();
    this.setState({listOfImages: newNumbers});
  }

  //every time the react local state gets updated, it invokes this render function which basically re-renders the components
  render (){ 

    const imagesList = this.state.listOfImages;
    return (
      <div className="App">
     
          <h1>Click an image to begin</h1>
          <p>Score: {this.state.userScore} | Top Score: 0</p>
          <div>
            <Images handleImageClick = {this.clickHandler} clickyimages= {imagesList}/> 
          </div>
         
      </div>
    );
  }
  
}

export default App;
