import React, { Component } from "react";

import Main from '../Main/index';
import SourcesDropDown from '../SourcesDropDown/index';
import FromDateDropDown from '../FromDateDropDown/index';
import ToDateDropDown from '../ToDateDropDown/index';

// const Header = (props) => {
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: [],
      sources: [],
      byDate: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
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

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
 handleSubmit(event) {
      event.preventDefault();
      const keywords = event.target["keywords"].value
      const fromDate = event.target["fromDate"].value
      const toDate = event.target["toDate"].value
      const source = event.target["source"].value 
      const domainUrl = source.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
console.log(domainUrl, fromDate, toDate, keywords)
      if (keywords && fromDate && toDate && domainUrl) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
  
      } if(keywords && fromDate && toDate && !domainUrl) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (keywords && fromDate && !domainUrl && !toDate) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (keywords && !domainUrl && !toDate && !fromDate) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (fromDate && toDate && domainUrl && !keywords) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (toDate && domainUrl && !fromDate && !keywords) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (domainUrl && !keywords && !toDate && !fromDate) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp.articles);
          const headlines = resp.articles

            this.setState({
                headlines: headlines
            })        
        });
      } if (fromDate && toDate && !keywords && !domainUrl) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (keywords && domainUrl && !toDate && !fromDate) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (keywords && toDate && domainUrl && !fromDate) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (keywords && toDate && !fromDate && !domainUrl) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (fromDate && domainUrl && !keywords && !toDate) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (keywords && fromDate && domainUrl && !toDate) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (fromDate && !toDate && !keywords && !domainUrl) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
      } if (toDate && !keywords && !fromDate && !domainUrl) {
        fetch (`https://newsapi.org/v2/everything?pageSize=30&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`)
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
    }

  render() {
    return (
      <div>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="">
            NewSource
          </a>
          <form onSubmit={ this.handleSubmit }>
            <ul className="nav nav-tabs">
              <li className="nav-item dropdown show">
                <SourcesDropDown 
                  sourcesArray={this.state.sources}
                  onSubmit={ this.handleSubmit }
                />
              </li>
              <li className="nav-item dropdown show">
                <FromDateDropDown 
                onSubmit={ this.handleSubmit }
                />
              </li>
              <li className="nav-item dropdown show">
                <ToDateDropDown 
                onSubmit={ this.handleSubmit }
                />
              </li> 
              <li>  
                <div className="form-group">
                  
                  <input type="text" className="form-control" placeholder="Keywords... (Optional)" 
                  name="keywords" id="keywords" value={ this.state.keywords}
                  onChange= { this.handleChange}></input>
                </div>
              </li>      
            </ul>
            <button id="submit-button"
            type="submit"
            className="btn btn-success btn-lg btn-block" onSubmit={ this.handleSubmit }>Run Your Search</button>
          </form>
        </nav>
      </header>
      <Main headlines={this.state.headlines}/>
      </div>
    );
  };
}
export default Header;

// <div className="dropdown-menu show" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;">

// <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a>
// <div className="dropdown-menu show" x-placement="bottom-start" >
// <a className="dropdown-item" href="">Action</a>
// <a className="dropdown-item" href="">Another action</a>
// <a className="dropdown-item" href="">Something else here</a>
// <div className="dropdown-divider"></div>
// <a className="dropdown-item" href="">Separated link</a>
// </div>

// <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a>
//             <div className="dropdown-menu show" x-placement="bottom-start" >
//               <a className="dropdown-item" href="">Action</a>
//               <a className="dropdown-item" href="">Another action</a>
//               <a className="dropdown-item" href="">Something else here</a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="">Separated link</a>
//             </div>