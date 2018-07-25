import React, { Component } from "react";

import Main from "../Main/index";
import SourcesDropDown from "../SourcesDropDown/index";
import FromDateDropDown from "../FromDateDropDown/index";
import ToDateDropDown from "../ToDateDropDown/index";
// import SearchesCards from "../SearchesCards/index";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPreview: false,
      userName: "",
      userSearches: [],
      headlines: [],
      sources: [],
      sourceData: "",
      keywordsData: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUser = this.getUser.bind(this);
    this.handleAutoFill = this.handleAutoFill.bind(this);
  }

  previewClick = () => {
    this.setState({
      showPreview: !this.state.showPreview
    });
  };

  getUser(event) {
    event.preventDefault();
    const user = this.state.userName;
    console.log(user);

    fetch(`http://localhost:3000/api/v1/userinput/${user}`)
      .then(response => {
        return response.json();
      })
      .then(resp => {
        console.log(resp);
        // const autoFillState = resp;
        this.setState({
          userSearches: resp.user
          // sourceData: resp.user.source,
          // keywordsData: resp.user.keywords
        });
        console.log(this.state.userSearches);
      });
  }

  handleAutoFill(event) {
    event.preventDefault();
    console.log(event.target);
    const sourceData = event.target.id;
    const keywordsData = event.target.name;
    // const autoFillData = {
    //   sourceData: event.target.id,
    //   keywordsData: event.target.name
    // }
    const currentState = this.state;
    this.setState({
      ...currentState,
      sourceData: sourceData,
      keywordsData: keywordsData
    });
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=2bd37b6cc3c54f58bbe5401f25169824"
    )
      .then(response => {
        return response.json();
      })
      .then(resp => {
        // console.log(resp);
        const array = resp.sources;
        this.setState({
          sources: array
        });
      });
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=2bd37b6cc3c54f58bbe5401f25169824"
    )
      .then(response => {
        return response.json();
      })
      .then(resp => {
        // console.log(resp);
        const headlines = resp.articles;
        this.setState({
          headlines: headlines
        });
      });
  }

  handleChange(event) {
    event.preventDefault();
    // console.log()
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log(this.state.sourceData);
  }
  handleSubmit(event) {
    event.preventDefault();
    const keywords = event.target["keywords"].value;
    const fromDate = event.target["fromDate"].value;
    const toDate = event.target["toDate"].value;
    const source = event.target["source"].value;
    const domainUrl = source
      .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
      .split("/")[0];
    console.log(domainUrl, fromDate, toDate, keywords);
    if (keywords && fromDate && toDate && domainUrl) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (keywords && fromDate && toDate && !domainUrl) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (keywords && fromDate && !domainUrl && !toDate) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (keywords && !domainUrl && !toDate && !fromDate) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (fromDate && toDate && domainUrl && !keywords) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (toDate && domainUrl && !fromDate && !keywords) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (domainUrl && !keywords && !toDate && !fromDate) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp.articles);
          const headlines = resp.articles;

          this.setState({
            headlines: headlines
          });
        });
    }
    if (fromDate && toDate && !keywords && !domainUrl) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&from=${fromDate}&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (keywords && domainUrl && !toDate && !fromDate) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (keywords && toDate && domainUrl && !fromDate) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (keywords && toDate && !fromDate && !domainUrl) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&q="${keywords}"&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (fromDate && domainUrl && !keywords && !toDate) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (keywords && fromDate && domainUrl && !toDate) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&domains=${domainUrl}&q="${keywords}"&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (fromDate && !toDate && !keywords && !domainUrl) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&from=${fromDate}&to=${fromDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
    if (toDate && !keywords && !fromDate && !domainUrl) {
      fetch(
        `https://newsapi.org/v2/everything?pageSize=30&to=${toDate}&apiKey=2bd37b6cc3c54f58bbe5401f25169824`
      )
        .then(response => {
          return response.json();
        })
        .then(resp => {
          console.log(resp);
          const headlines = resp.articles;
          this.setState({
            headlines: headlines
          });
        });
    }
  }

  render() {
    console.log(this.state);
    const users = this.state.userSearches;

    const previousSearches = users.map(userSearch => {
      return (
        <div className="card-body" id={userSearch}>
          <h4 className="card-title">Previous Search</h4>
          <p className="card-text"> {userSearch.userName}</p>
          <h5>Source: </h5>
          <p className="card-text prev-search"> {userSearch.source}</p>

          <h5>Keyword(s): </h5>
          <p className="card-text prev-search"> {userSearch.keywords}</p>
          <button
            className="btn btn-outline-danger"
            id={userSearch.source}
            name={userSearch.keywords}
            type="submit"
            onClick={this.handleAutoFill}
          >
            Use This Search
          </button>
        </div>
      );
    });

    return (
      <div>
        <button
          className="btn btn-outline-success"
          id="preview-toggle"
          type="submit"
          onClick={this.previewClick}
        >
          Enter User Name to Save Search or Retrieve Previous Search(es)
        </button>

        {this.state.showPreview ? (
          <div className="card text-white bg-primary mb-3">
            <form>
              <div className="form-group">
                <label htmlFor="search">User Name To Save/Find</label>

                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={this.state.userName}
                  placeholder="Ex: JohnD"
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-outline-warning"
                  name="userName"
                  id="getUser"
                  type="submit"
                  onClick={this.getUser}
                >
                  Get Previous Search(es)
                </button>
              </div>
            </form>

            <div className="card col-xs-12 col-sm-6 col-md-4">
              {previousSearches}
            </div>
          </div>
        ) : null}
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="">
              <h1>NewSource</h1>
            </a>
            <form onSubmit={this.handleSubmit}>
              <ul className="nav nav-tabs">
                <li className="nav-item dropdown show">
                  <SourcesDropDown
                    sourcesArray={this.state.sources}
                    onSubmit={this.handleSubmit}
                  />
                </li>
                <li className="nav-item dropdown show">
                  <FromDateDropDown onSubmit={this.handleSubmit} />
                </li>
                <li className="nav-item dropdown show">
                  <ToDateDropDown onSubmit={this.handleSubmit} />
                </li>
                <li>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Keyword(s)... (Optional)"
                      name="keywords"
                      id="keywords"
                      value={this.state.keywords}
                      onChange={this.handleChange}
                    />
                  </div>
                </li>
              </ul>

              <button
                id="submit-button"
                type="submit"
                className="btn btn-success btn-lg btn-block"
                onSubmit={this.handleSubmit}
              >
                Run Your Search
              </button>
            </form>
          </nav>
        </header>
        <Main headlines={this.state.headlines} />
      </div>
    );
  }
}
export default Header;
