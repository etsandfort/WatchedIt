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
        <table className="table">
          <tr>
            <td><button className="btn btn-link">Netflix</button></td>
          </tr>
        </table>
        <table className="table">
          <tr>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
            <td><button class="btn btn-primary btn-lg btn-block"><img src="http://i3.kym-cdn.com/entries/icons/original/000/022/713/4.png"/></button></td>
          </tr>
        </table>
        <table className="table">
          <tr>
            <td><button className="btn btn-link">Amazon</button></td>
          </tr>
        </table>
        <table className="table">
          <tr>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
          </tr>
        </table>
        <table className="table">
          <tr>
            <td><button className="btn btn-link">HBO</button></td>
          </tr>
        </table>
        <table className="table">
          <tr>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
            <td><button class="btn btn-primary btn-lg btn-block">TITLE</button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Discover;