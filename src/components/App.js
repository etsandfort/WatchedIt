import React, { Component } from 'react';
import logo from '../logo.svg';
import Sidebar from './Sidebar.js';
import './includes/App.css';

class App extends Component {
  render() {
    return (
      <body className="App">
		<div className="App-Sidebar">
			<Sidebar/>
		</div>
      </body>
    );
  }
}

export default App;
