import React from 'react';

import ControlPanel from './components/ControlPanel';
import Graph from './components/Graph';
import Algorithms from './algorithms';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      algorithm: 'merge',
      array: [],
      arrayLength: 10,
    }
  }

  randomize = length => {
    const arr = [];

    for(let i = 0; i < length; i++) {
        const number = (Math.random() * 100).toFixed(0);

        arr.push(Number(number));
    }

    return arr;
  }

  setAlgorithm = event => {
    this.setState({ algorithm: event.target.value })
  }

  setArrayLength = event => {
    this.setState({ 
      arrayLength: event.target.value, 
      array: this.randomize(event.target.value) 
    });
  }

  setArrayValues = () => {
    this.setState({ array: this.randomize(this.state.arrayLength) })
  }

  sortArray = () => {
    const array = Algorithms[this.state.algorithm](this.state.array);

    this.setState({ array });
  }

  componentDidMount() {
    this.setArrayValues();
  }

  render() {
    return (
      <div className="App">
        <ControlPanel config={this.state} 
                      setArrayValues={this.setArrayValues}
                      setArrayLength={this.setArrayLength}
                      setAlgorithm={this.setAlgorithm}
                      sortArray={this.sortArray}
        />
        <Graph data={this.state.array}/>
      </div>
    );
  }
}

export default App;
