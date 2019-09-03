import React from 'react';

import Header from './components/Header';
import ControlPanel from './components/ControlPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      algorithm: 'merge'
    }
  }

  render() {
    return (
      <div className="App">
        Hello World
        <Header />
        <ControlPanel algorithm={this.state.algorithm} />
      </div>
    );
  }
}

export default App;
