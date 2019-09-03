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

  render() {
    return (
      <div className="App">
        Hello World
        <Header />
        <ControlPanel config={this.state} />
        <Graph />
      </div>
    );
  }
}

export default App;
