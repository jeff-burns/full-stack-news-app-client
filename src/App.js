import React, { Component } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';

import API from './library/API';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: []
    }
  }

  async componentDidMount() {
    const headlines = await API.getAll();
    this.setState({
      headlines
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main headlines={this.state.headlines}/>
      </div>
    );
  }
}

export default App;
