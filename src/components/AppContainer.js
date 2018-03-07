import React, { Component } from 'react';
import MyList from './MyList.js'
import Discover from './Discover.js'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="AppContainer">
                {this.props.currentPage === "myList" && <MyList/>}
                {this.props.currentPage === "discover" && <Discover/>}
            </div>
        );
    }
}

AppContainer.defaultProps = {
    text: 'Hello World'
}

export default AppContainer;
