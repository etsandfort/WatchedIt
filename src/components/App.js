import React, { Component } from 'react';
import Sidebar from './Sidebar'
import logo from '../images/logo.svg';
import './includes/App.css';
import MyList from './MyList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
    };
  }

  render() {
    
    return (
          <div className="row justify-content-start App">
            <div className="App-Sidebar">
              <Sidebar/>
            </div>
            <div className="App-MyList col-sm-8">
              <MyList />
            </div>
          </div>
    );
  }


}

export default App;
