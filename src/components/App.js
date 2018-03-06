import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import './includes/App.css';
import MyList from './MyList.js';

class App extends Component {
  render() {
    return (
      <body className="App">
        <div className="App-Sidebar">
          <Sidebar/>
          <MyList />
        </div> 
      </body>
    );
  }
}

export default App;
