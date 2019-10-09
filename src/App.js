import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import GameBody from './components/GameBody';
import colors from './data/colors.json';
import shapes from './data/shapes.json';

class App extends React.Component {
  state = {
      current: 0,
      high: 0,
      colors,
      shapes,
      shapesClicked: []
  }

  increaseByOne = () => {
    let current = this.state.current + 1;
    this.setState(
      {
        current: current
      }
    )
    this.rearrangeArr();
  }

  resetScore = () => {
    console.log(this.state.current);
    if (this.state.current > this.state.high) {
      this.setState({high: this.state.current})
    } 
    this.setState(
      {
        current: 0,
        shapesClicked: []
      }
    )
  }

  rearrangeArr = () => {
    let shapes = this.state.shapes;
    let colors = this.state.colors;
    for (let i = shapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shapes[i], shapes[j]] = [shapes[j], shapes[i]];
    }
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
  }

  render() {
    return (
      <div>
        <Header
         currentScore={this.state.current} highScore={this.state.high} onClick={this.increaseByOne}
         />
         <Jumbotron />
         <GameBody
          shapes={this.state.shapes}
          colors={this.state.colors}
          rearrange={this.increaseByOne}
          shapesClicked={this.state.shapesClicked}
          resetScore={this.resetScore}
         />
      </div>
    );
  }
}

export default App;
