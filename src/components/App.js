import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import AppContainer from './AppContainer.js';
import './includes/App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.handler = this.handler.bind(this);
		this.state = {
            currentPage: "discover"
        }
	}

	handler(state) {
		this.setState(state);
	}

    render() {
        return (
			<body className="App">
				<div className="flex-container">
					<div className="sidebar-flex">
						<Sidebar handler = {this.handler.bind(this)}  currentPage={this.state.currentPage}/>
					</div>
					<div className="container-flex">
						<AppContainer currentPage={this.state.currentPage}/>
					</div>
				</div>
			</body>
        );
    }
}

App.defaultProps = {
	currentPage : "discover"
}

export default App;
