import React, { Component } from 'react';
import List from './List'
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
        <p className="App-intro">
          {this.props.text}
        </p>
        <List/>
      </div>
    );
  }


}

App.defaultProps = {
  text: 'woohoo',
}
export default App;
