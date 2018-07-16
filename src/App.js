import React, { Component } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';

import API from './library/API';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: [],
      sources: []
    }
  }



  async componentDidMount() {
    const headlines = await API.getAll();
    this.setState({
      headlines
    })

    fetch('https://newsapi.org/v2/sources?apiKey=2bd37b6cc3c54f58bbe5401f25169824')
    .then(response => {
      return response.json();
    })
    .then(resp => {
      console.log(resp);
      const array = resp.sources
        this.setState({
            sources: array
        })        
    });
  }

  render() {
    return (
      <div className="App">
        <Header sources={this.state.sources}/>
        <Main headlines={this.state.headlines}/>
      </div>
    );
  }
}

export default App;
