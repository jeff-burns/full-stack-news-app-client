import React from 'react';

const SearchesCards = props => {
    
     

    const users = props.userSearches

    const previousSearches = users.map(userSearch => {
        return (
            <div className="card-body" id={userSearch}>
            <h4 className="card-title">Previous Search</h4>
            <p className="card-text">         {userSearch.userName} 
            </p>
            <h5>Source: </h5> 
            <p className="card-text">        {userSearch.source} 
            </p>
            <h5>Keyword(s): </h5>
            <p className="card-text">         {userSearch.keywords} 
            </p>
            <button className="btn btn-outline-danger" form={userSearch} id={userSearch.source} 
            name={userSearch.keywords} type="submit" onClick={ this.handleAutoFill}>
    Use This Search
    </button>
            </div>
 
        )
      })
    return (
        <div className="card col-xs-12 col-sm-6 col-md-4">
            {previousSearches}

      </div>
           
    )
}

export default SearchesCards;

