import React from 'react';

import NewsCards from '../NewsCards/index';

const Main = props => {
    const { headlines } = props;
    return (
        <main className="container">
            <h2>Top Headlines</h2>
            <section className="row">
                {headlines.map(headline => (
                    <NewsCards
                        id={headline.source.id}
                        name={headline.source.name}
                        title={headline.title}
                        author={headline.author}
                        description={headline.description}
                        url={headline.url}
                        urlToImage={headline.urlToImage}
                    />
                ))}
            </section>
        </main>
    );
};

export default Main;
