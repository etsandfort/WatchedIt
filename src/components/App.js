import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import AppContainer from './AppContainer.js';
import './includes/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            currentPage: "discover",
            mediaFilter: ""
        }
    }

    handler(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className="App">
                <div className="flex-container">
                    <div className="sidebar-flex">
                        <Sidebar handler = {this.handler.bind(this)} currentPage={this.state.currentPage} mediaFilter={this.state.mediaFilter}/>
                    </div>
                    <div className="container-flex">
                        <AppContainer handler = {this.handler.bind(this)} currentPage={this.state.currentPage} mediaFilter={this.state.mediaFilter}/>
                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    currentPage : "discover",
    mediaFilter: ""
}

export default App;
