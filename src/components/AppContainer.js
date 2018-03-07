import React, { Component } from 'react';
import MyList from './MyList.js'

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
            </div>
        );
    }
}

AppContainer.defaultProps = {
    text: 'Hello World'
}

export default AppContainer;
