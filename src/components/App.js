import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import './includes/App.css';
import MyList from './MyList.js';

class App extends Component {
  render() {
    return (
      <body className="App">
          <div className="row justify-content-start">
            <div className="App-Sidebar">
              <Sidebar/>
            </div>
            <div className="App-MyList col-sm-8">
              <MyList />
            </div>
          </div>
      </body>
    );
  }
}

export default App;
