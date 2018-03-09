import React, { Component } from 'react';
import './includes/App.css';
import './includes/Discover.css';

class Discover extends Component {
  render() {
    return (
      <div className="Discover">
      <div className="flex-container">
      <div className="discover-content">
		<div className="Discover-Tab">
            <div className="Discover-Tab-Option">Trending</div>
            <div className="Discover-Tab-Option">New Releases</div>
            <div className="Discover-Tab-Option">Genres</div>
			<div className="Discover-Tab-Option">Search</div>
		</div>
          <h2 style={{paddingLeft: 15, padding: 10}} align="left">Netflix</h2>
        <table className="table">
          <tr>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
			<td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
          </tr>
        </table>
          <h2 style={{paddingLeft: 15}} align="left">Amazon</h2>
        <table className="table">
          <tr>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
			<td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
          </tr>
        </table>
          <h2 style={{paddingLeft: 15}} align="left">HBO</h2>
        <table className="table">
          <tr>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
			<td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
          </tr>
        </table>
        </div>
        </div>
      </div>
    );
  }
}

export default Discover;