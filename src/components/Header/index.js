import React from "react";

import SourcesDropDown from '../SourcesDropDown/index';

const Header = (props) => {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="">
          NewSource
        </a>

        <ul className="nav nav-tabs">
          <li className="nav-item dropdown show">
          <SourcesDropDown sourcesArray={props.sources}/>
            
          </li>
          <li className="nav-item dropdown show">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a>
            <div className="dropdown-menu show" x-placement="bottom-start" >
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="">Separated link</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

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