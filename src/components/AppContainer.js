import React, { Component } from 'react';
import MyList from './MyList.js'
import Discover from './Discover.js'
import Database from './Database.js'

let db = new Database();
const shows = db.shows;

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    
    render() {
        console.log(shows);
        return (
            <div className="AppContainer">
                {this.props.currentPage === "myList" && <MyList listItems={this.props.db.shows}/>}
                {this.props.currentPage === "discover" && <Discover/>}
            </div>
        );
    }
}

AppContainer.defaultProps = {
    db: db
}

export default AppContainer;
