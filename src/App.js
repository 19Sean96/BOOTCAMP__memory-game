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
      shapeLength: 12
  }

  increaseByOne = () => {
    let current = this.state.current + 1;
    this.setState(
      {
        current: current
      }
    )
    console.log("colors", this.state.colors);
    console.log("shapes", this.state.shapes);
    this.rearrangeArr();
  }

  rearrangeArr = () => {
    let shapes = this.state.shapes;
    let colors = this.state.colors;
    console.log("SHAPES BEFORE", shapes);
    console.log("COLORS BEFORE", colors);
    for (let i = shapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shapes[i], shapes[j]] = [shapes[j], shapes[i]];
    }

    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    console.log("SHAPES AFTER", shapes);
    console.log("COLORS BEFORE", colors);
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
         />
      </div>
    );
  }
}

export default App;
