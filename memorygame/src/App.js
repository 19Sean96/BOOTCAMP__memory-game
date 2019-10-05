import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

class App extends React.Component {
  state = {
      current: 0,
      high: 0
  }

  increaseByOne = () => {
    let current = this.state.current + 1;
    this.setState(
      {
        current: current
      }
    )
  }

  render() {
    return (
      <div>
        <Header
         currentScore={this.state.current} highScore={this.state.high} onClick={this.increaseByOne}
         />
         <Jumbotron />
      </div>
    );
  }
}

export default App;
