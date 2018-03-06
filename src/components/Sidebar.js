import React, { Component } from 'react';
import logo from '../logo.png';
import './includes/Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <header className="Sidebar-header">
          <img src={logo} className="Sidebar-logo" alt="logo" />
        </header>
        <div className="Sidebar-buttons">
          <div>
            <p>My List</p>
              <div className="Sidebar-sub-buttons">
                <p>TV Shows</p>
                <p>Movies</p>
              </div>
		      </div>
		      <div><p>Discover</p></div>
        </div>
      </div>
    );
  }
}

export default Sidebar;