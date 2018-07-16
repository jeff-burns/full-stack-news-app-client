import React, { Component } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';

// import API from './library/API';

//FETCH url  by sources/dates/keyphrase/numberperpage https://newsapi.org/v2/everything?pageSize=100&domains=bbc.co.uk, foxsports.com,espn.go.com&q="World Cup"&from=2018-06-15&to=2018-07-15&apiKey=2bd37b6cc3c54f58bbe5401f25169824

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: [],
      sources: [],
      byDate: []
    }
  }



  // async componentDidMount() {
  //   const headlines = await API.getAll();
  //   this.setState({
  //     headlines
  //   })
    componentDidMount() {
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

    fetch(`https://newsapi.org/v2/everything?q="World Cup"&from=2018-06-15&to=2018-07-15&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2bd37b6cc3c54f58bbe5401f25169824')
    .then(response => {
      return response.json();
    })
    .then(resp => {
      console.log(resp);
      const headlines = resp.articles
        this.setState({
            headlines: headlines
        })        
    });
  }

  render() {
    return (
      <div className="App">
        <Header sources={this.state.sources}
                byDate={this.state.byDate}
        />
        <Main headlines={this.state.headlines}/>
      </div>
    );
  }
}

export default App;
