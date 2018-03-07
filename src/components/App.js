import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import AppContainer from './AppContainer.js';
import './includes/App.css';
<<<<<<< HEAD
import MyList from './MyList.js';
import Discover from './Discover.js'
=======
>>>>>>> master

class App extends Component {
	constructor(props){
		super(props);
		this.handler = this.handler.bind(this);
		this.state = {
            currentPage: ""
        }
	}

	handler(state) {
		this.setState(state);
	}

    render() {
        return (
            <div className="row App">
                <div className="col-xs-3">
                    <Sidebar handler = {this.handler.bind(this)}/>
                </div>
                <div className="col-xs-9">
<<<<<<< HEAD
                    <Discover/>
=======
                    <AppContainer currentPage={this.state.currentPage}/>
>>>>>>> master
                </div>
            </div>
        );
    }
}

App.defaultProps = {
	currentPage : "discover"
}

export default App;
