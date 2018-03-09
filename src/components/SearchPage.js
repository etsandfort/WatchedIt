import React, { Component } from 'react';
import './includes/App.css';
import './includes/SearchPage.css';

class SearchPage extends Component {
  render() {
    return (
      <div className="SearchPage">
      <div className="flex-container">
      <div className="searchPage-content">
      <form>
        <input type="text" name="search" placeholder="Search.."/>
      </form>
        <table className="table">
          <tr>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg"/></div></td>
            <td><h1>Star Wars Epsiode IV</h1></td>
            <td><h1>6.9</h1></td>
            <td><h1>Movie</h1></td>
            <td><button className="btn btn-primary">Add to list</button></td>
          </tr>
        </table>
        </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;