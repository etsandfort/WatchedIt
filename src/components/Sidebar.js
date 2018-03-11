import React, { Component } from 'react';
import logo from '../images/logo.png';
import './includes/Sidebar.css';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
        <header className="Sidebar-header">
          <img src={logo} className="Sidebar-logo" alt="logo" onClick={this.props.handler.bind(this, {currentPage: "discover"})}/>
        </header>

        <div>
          <div className="Sidebar-hover">
            <p className={"Sidebar-buttons" + (this.props.currentPage === "myList" ? " Sidebar-Active" : "")} onClick={this.props.handler.bind(this, {currentPage: "myList", mediaFilter: ""})} >My List</p>
          </div>
          <div className="Sidebar-hover">
            <p className={"Sidebar-sub-buttons" + (this.props.currentPage === "myList" && this.props.mediaFilter === "TV" ? " Sidebar-Active" : "")} onClick={this.props.handler.bind(this, {currentPage: "myList", mediaFilter: "TV"})}>TV Shows</p>
          </div>
          <div className="Sidebar-hover">
            <p className={"Sidebar-sub-buttons" + (this.props.currentPage === "myList" && this.props.mediaFilter === "Movie" ? " Sidebar-Active" : "")} onClick={this.props.handler.bind(this, {currentPage: "myList", mediaFilter: "Movie"})}>Movies</p>
          </div>
          
          <div className="Sidebar-hover">
            <p className={"Sidebar-buttons" + (this.props.currentPage === "discover" ? " Sidebar-Active" : "")} onClick={this.props.handler.bind(this, {currentPage: "discover"})}>Discover</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;