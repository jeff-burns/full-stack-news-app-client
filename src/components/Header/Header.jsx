import React, { Component } from 'react';

import Main from '../Main';
import SourcesDropDown from '../SourcesDropDown';
import FromDateDropDown from '../FromDateDropDown';
import ToDateDropDown from '../ToDateDropDown';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPreview: false,
            userName: '',
            userBeingFilled: false,
            userSearches: [],
            headlines: [],
            sources: [],
            sourceData: '',
            keywordsData: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getUser = this.getUser.bind(this);
        this.isbeingfilled = this.isbeingfilled.bind(this);
        this.handleAutoFill = this.handleAutoFill.bind(this);
    }

    previewClick = () => {
        this.setState({
            showPreview: !this.state.showPreview
        });
    };

    isbeingfilled() {
        const user = this.state.userName;
        if (user !== '') {
            this.setState({
                userBeingFilled: true
            });
        }
    }

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

    handleAutoFill = event => {
        event.preventDefault();
        const domainUrl = event.target.id;
        const keywords = event.target.name;
        this.getSpecifiedSearch({ domainUrl, keywords });
        this.setState({
            sourceData: domainUrl,
            keywordsData: keywords
        });
    };

    componentDidMount() {
        const fetchSources = fetch(
            'https://newsapi.org/v2/sources?apiKey=2bd37b6cc3c54f58bbe5401f25169824'
        ).then(resp => resp.json());

        const fetchHeadlines = fetch(
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=2bd37b6cc3c54f58bbe5401f25169824'
        ).then(resp => resp.json());

        Promise.all([fetchSources, fetchHeadlines]).then(
            ([sourcesResp, headlinesResp]) => {
                const sources = sourcesResp.sources;
                console.log(sources);
                const headlines = headlinesResp.articles;
                this.setState({ sources, headlines });
            }
        );
    }

    handleChange(event) {
        event.preventDefault();
        // console.log()
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        this.isbeingfilled();
        console.log(this.state.sourceData);
    }

    handleSubmit(event) {
        event.preventDefault();
        const keywords = event.target['keywords'].value;
        const fromDate = event.target['fromDate'].value;
        const toDate = event.target['toDate'].value;
        const source = event.target['source'].value;
        const domainUrl = source
            .replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
            .split('/')[0];

        const user = this.state.userName;
        const formData = {
            userName: user,
            source: source,
            domain: domainUrl,
            keywords: keywords
        };

        if (this.state.userBeingFilled) {
            fetch('http://localhost:3000/api/v1/userinput', {
                method: 'POST',
                headers: new Headers({
                    'content-type': 'application/json'
                }),
                body: JSON.stringify(formData)
            })
                .then(resp => resp.json())
                .then(resp => console.log(resp));
        }

        this.getSpecifiedSearch({
            keywords,
            fromDate,
            toDate,
            domainUrl
        });
    }

    getSpecifiedSearch = ({ domainUrl, fromDate, toDate, keywords }) => {
        const url =
            'https://newsapi.org/v2/everything?pageSize=30&apiKey=2bd37b6cc3c54f58bbe5401f25169824' +
            (domainUrl ? `&domains=${domainUrl}` : '') +
            (fromDate ? `&from=${fromDate}` : '') +
            (toDate ? `&to=${toDate}` : '') +
            (keywords ? `&q=${keywords}` : '');

        fetch(url)
            .then(response => response.json())
            .then(resp => {
                const headlines = resp.articles;
                this.setState({
                    headlines: headlines
                });
            });
    };
    // handleUserSavedSearch = user => {
    //   // 1) Get current user
    //   // 2) Get previous search data from user,
    //   //  which returns { keywords, fromDate, toDate, domainUrl }
    //   this.getSpecifiedSearch({ keywords, domainUrl });
    // };

    render() {
        const { headlines, sources } = this.props;

        console.log(this.state);
        const users = this.state.userSearches;

        const previousSearches = users.map(userSearch => {
            return (
                <div className="card col-xs-12 col-sm-6 col-md-4">
                    <div className="card-body" id={userSearch}>
                        <h4 className="card-title">Previous Search</h4>
                        <p className="card-text"> {userSearch.userName}</p>
                        <h5>Source: </h5>
                        <p className="card-text prev-search">
                            {' '}
                            {userSearch.source}
                        </p>

                        <h5>Keyword(s): </h5>
                        <p className="card-text prev-search">
                            {' '}
                            {userSearch.keywords}
                        </p>
                        <button
                            className="btn btn-outline-danger"
                            id={userSearch.domain}
                            name={userSearch.keywords}
                            type="submit"
                            onClick={this.handleAutoFill}
                        >
                            Use This Search
                        </button>
                    </div>
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
                    Enter User Name to Save Search or Retrieve Previous
                    Search(es)
                </button>

                {this.state.showPreview ? (
                    <div className="card text-white bg-primary mb-3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="search">
                                    User Name To Save/Find
                                </label>

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
                        <div className="row">{previousSearches}</div>
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
                                    <FromDateDropDown
                                        onSubmit={this.handleSubmit}
                                    />
                                </li>
                                <li className="nav-item dropdown show">
                                    <ToDateDropDown
                                        onSubmit={this.handleSubmit}
                                    />
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
