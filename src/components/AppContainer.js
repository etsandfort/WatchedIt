import React, { Component } from 'react';
import Database from './Database.js'
import MyList from './MyList.js';
import Discover from './Discover.js';
import ShowInfo from './ShowInfo.js';
import SearchPage from './SearchPage.js';
import './includes/App.css';

let db = new Database();

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyViewingShow: {},

        };
        this.showInfoPageSetter = this.showInfoPageSetter.bind(this);
        this.listStatusToggler = this.listStatusToggler.bind(this);

    }
    
    showInfoPageSetter(page) {
        this.setState({currentlyViewingShow: this.loadShowInfoPage(page)});
    }

    listStatusToggler(title){
        this.props.db.shows.forEach(element => {
            if(element.title===title){
                element.onMyList = !element.onMyList;
            }
        });
        this.setState(this.state);
    }

    loadShowInfoPage(title){
        let ret = {};
        this.props.db.shows.forEach(element => {
            
            if(element.title===title){
                ret = element;
            }
        });
        return ret;
    }

    render() {
        let filter = this.props.mediaFilter;
        return (
            <div className="AppContainer">
                {this.props.currentPage === "myList" && <MyList handler={this.props.handler}
                 listItems={this.props.db.shows} listStatusToggler={this.listStatusToggler.bind(this)}
                 mediaFilter={filter} showInfoPageSetter={this.showInfoPageSetter.bind(this)}/>}
                {this.props.currentPage === "discover" && <Discover handler={this.props.handler} 
                 listItems={this.props.db.shows} showInfoPageSetter={this.showInfoPageSetter.bind(this)}/>}
                {this.props.currentPage === "showInfo" && <ShowInfo listItems={this.props.db.shows} 
                 showInfo={this.state.currentlyViewingShow} listStatusToggler={this.listStatusToggler.bind(this)}/>}
                {this.props.currentPage === "searchPage" && <SearchPage listItems={this.props.db.shows} 
                    listStatusToggler={this.listStatusToggler.bind(this)} handler={this.props.handler}
                    showInfoPageSetter={this.showInfoPageSetter.bind(this)}/>}
            </div>
        );
    }
}

AppContainer.defaultProps = {
    db: db
}

export default AppContainer;
