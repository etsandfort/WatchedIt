import React, { Component } from 'react';
import List from './List'
import Sidebar from './Sidebar'
import logo from '../images/logo.svg';
import './includes/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">
        <div className="col-xs-3">
          <Sidebar/>
        </div>
        <div className="col-xs-9">
          <List/>
        </div>
        </div>
      </div>

    );
  }


}

export default App;
