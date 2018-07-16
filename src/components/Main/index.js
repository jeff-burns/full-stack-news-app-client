import React from 'react';

import NewsCards from '../NewsCards/index';

const Main = props => {
    const newsSections = props.headlines.map(headline => {
        return (
            <NewsCards 
                id={headline.source.id}
                name={headline.source.name} 
                title={headline.title}
                author={headline.author}
                description={headline.description}
                url={headline.url}
                urlToImage={headline.urlToImage}
            />
        )
      })
    return (
        <main className="container">
            <h2>Top Headlines</h2>
            <section className="row">
                {newsSections}
            </section>
        </main>
    )
}

export default Main;