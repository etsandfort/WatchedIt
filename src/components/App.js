import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import AppContainer from './AppContainer.js';
import './includes/App.css';
import MyList from './MyList.js';
import Discover from './Discover.js'

class App extends Component {
    render() {
        return (
          <body className="App">
            <div className="row">
                <div className="col-xs-3">
                    <Sidebar/>
                </div>
                <div className="col-xs-9">
                    <Discover/>
                </div>
            </div>
          </body>
        );
    }
}

export default App;
