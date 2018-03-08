import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import AppContainer from './AppContainer.js';
import './includes/App.css';

class App extends Component {
    render() {
        return (
          <div className="App container-fluid">
            <div className="row">
                <div className="col-xs-3">
                    <Sidebar/>
                </div>
                <div className="col-xs-9">
                    <AppContainer/>
                </div>
            </div>
          </div>
        );
    }
}

export default App;
