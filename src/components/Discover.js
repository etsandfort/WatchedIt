import React, { Component } from 'react';
import './includes/App.css';
import './includes/Discover.css';

class Discover extends Component {
  render() {
    return (
        <div className="flex-container">
            <div className="discover-content">
                <table className="table">
                    <tbody>
                        <tr>
                            <td><button className="btn btn-link">Trending</button></td>
                            <td><button className="btn btn-link">New Releases</button></td>
                            <td><button className="btn btn-link">Genres</button></td>
                        </tr>
                    </tbody>
                </table>
                <h2 style={{paddingLeft: 15}} align="left">Netflix</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg"/></div></td>
                            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
                            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
                            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
                            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
                            <td><div className="Discover-Title-Card"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SY1000_CR0,0,709,1000_AL_.jpg"/></div></td>
                        </tr>
                    </tbody>
                </table>
                <h2 style={{paddingLeft: 15}} align="left">Amazon</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                        </tr>
                    </tbody>
                </table>
                <h2 style={{paddingLeft: 15}} align="left">HBO</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
}

export default Discover;