import React, { Component } from 'react';
import MyList from './MyList';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
        };
    }

    render() {
        return (
            <div className="AppContainer">
                <MyList />
            </div>
        );
    }
}

AppContainer.defaultProps = {
    text: 'Hello World'
}

export default AppContainer;
