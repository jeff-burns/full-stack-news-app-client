import React from 'react';

import NewsCards from '../NewsCards/index';

const Main = props => {
    console.log(props.headlines)
    const newsSections = props.headlines.map(headline => {
        return (
            <NewsCards 
                name={headline.name} 
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