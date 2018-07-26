import React from "react";

const NewsCards = props => {
  return (
    <div
      className="card col-xs-12 col-sm-6 col-md-4"
      key={props.id}
      id={props.id}
    >
      <img className="card-img-top" src={props.urlToImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h4 className="card-title">{props.title}</h4>
        <p>{props.author}</p>
        <p className="card-text">{props.description}</p>
        <a href={props.url} target="_blank" className="btn btn-primary">
          Go To Article -->
        </a>
      </div>
    </div>
  );
};
export default NewsCards;
