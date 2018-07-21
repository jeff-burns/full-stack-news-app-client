import React from 'react';
import Header from './components/Header/index';

const App = () => {
  
// async componentDidMount() {
  //   const headlines = await API.getAll();
  //   this.setState({
  //     headlines
  //   })

    return (
      <div className="App">
        <Header />
      </div>
    );
  }

export default App;
