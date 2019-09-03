import React from 'react';

import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import Graph from './components/Graph';

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
        arr.push((Math.random() * 100)
                     .toFixed(0));
    }

    return arr;
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

  componentDidMount() {
    this.setArrayValues();
  }

  render() {
    return (
      <div className="App">
        Hello World
        <Header />
        <ControlPanel config={this.state} 
                      setArrayValues={this.setArrayValues}
                      setArrayLength={this.setArrayLength}
        />
        <Graph />
      </div>
    );
  }
}

export default App;
