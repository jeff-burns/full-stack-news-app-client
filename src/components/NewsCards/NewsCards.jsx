import React from 'react';

const NewsCards = props => {
    const {
        id,
        urlToImage,
        title,
        name,
        author,
        description,
        url,
        publishedAt
    } = props;
    return (
        <div
            className="card col-xs-12 col-sm-6 col-md-4"
            key={publishedAt}
            data-source={id}
        >
            <img className="card-img-top" src={urlToImage} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h4 className="card-title">{title}</h4>
                {author && <p>{author}</p>}
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" className="btn btn-primary">
                    Go To Article -->
                </a>
            </div>
        </div>
    );
};

export default NewsCards;
