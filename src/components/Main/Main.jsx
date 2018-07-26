import React, { Component } from 'react';

import NewsCards from '../NewsCards/index';

export default class Main extends Component {
    state = {
        sources: [],
        headlines: []
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
                const headlines = headlinesResp.articles;
                this.setState({ sources, headlines });
            }
        );
    }

    render() {
        const { headlines } = this.state;
        return (
            <div className="container">
                <h2>Top Headlines</h2>
                <section className="row">
                    <ul>
                        {headlines.map(headline => (
                            <NewsCards
                                key={headline.publishedAt}
                                publishedAt={headline.publishedAt}
                                id={headline.source.id}
                                name={headline.source.name}
                                title={headline.title}
                                author={headline.author}
                                description={headline.description}
                                url={headline.url}
                                urlToImage={headline.urlToImage}
                            />
                        ))}
                    </ul>
                </section>
            </div>
        );
    }
}
