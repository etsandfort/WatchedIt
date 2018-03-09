import React, { Component } from 'react';
import './includes/App.css';

class Discover extends Component {
  render() {
    return (
      <div className="Discover">
        <table className="table">
          <tr>
            <td><button className="btn btn-link">Trending</button></td>
            <td><button className="btn btn-link">New Releases</button></td>
            <td><button className="btn btn-link">Genres</button></td>
          </tr>
        </table>
          <h2 style={{paddingLeft: 15}} align="left">Netflix</h2>
        <table className="table">
          <tr>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://www.coloriagesdecoupages.com/avatar/cinemas/avatar-Star-Wars-Logo.jpg"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
          </tr>
        </table>
          <h2 style={{paddingLeft: 15}} align="left">Amazon</h2>
        <table className="table">
          <tr>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></button></td>
          </tr>
        </table>
          <h2 style={{paddingLeft: 15}} align="left">HBO</h2>
        <table className="table">
          <tr>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Discover;