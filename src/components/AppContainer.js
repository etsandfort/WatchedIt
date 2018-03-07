import React, { Component } from 'react';

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
                <p>{this.props.text}</p>
            </div>
        );
    }
}

AppContainer.defaultProps = {
    text: 'Hello World'
}

export default AppContainer;
