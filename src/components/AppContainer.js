import React, { Component } from 'react';
import Database from './Database.js'
import MyList from './MyList.js';
import Discover from './Discover.js';
import ShowInfo from './ShowInfo.js';
import SearchPage from './SearchPage.js';
import './includes/App.css';

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
                {this.props.currentPage === "showInfo" && <ShowInfo/>}
                {this.props.currentPage === "searchPage" && <SearchPage listItems={this.props.db.shows}/>}
            </div>
        );
    }
}

AppContainer.defaultProps = {
    db: db
}

export default AppContainer;
