import React from 'react';

import Header from './components/Header';

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
      </div>
    );
  }
}

export default App;
