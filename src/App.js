import React, { Component } from 'react';

import API from './library/API';

class App extends Component {
  constructor() {
    super();

    this.state = {
      headlines: []
    }
  }

  async componentDidMount() {
    const headlines = await API.getAll();
    console.log(headlines);
    this.setState({
      headlines
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="">NewSource</a>
          </nav>
        </header>
        <main className="container">
          <h2>Top Headlines</h2>
          <section className="row">
          {this.state.headlines.map(headline => {
            return (
              <div className="card col-sm-4">
                <img className="card-img-top" src={headline.urlToImage} alt={headline.title}></img>
                <div className="card-body">
                  <h5 className="card-title">{headline.name}</h5>
                  <h4 className="card-title">{headline.title}</h4>
                  <p>{headline.author}</p>
                  <p className="card-text">{headline.description}</p>
                  <a href={headline.url} target="_blank" className="btn btn-primary">Go To Article --></a>
                </div>
              </div>
            )
          })}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
