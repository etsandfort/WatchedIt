import React, { Component } from 'react';
import './includes/App.css';

class MyList extends Component {
  render() {
    return (
      <div className="MyList container">
        <header className="row">
          <h1 className="App-title">MyList</h1>
        </header>
        <div className="row">
          <button className="col-sm-4 btn btn-primary">
            Add a Show/Movie
          </button>
          <button className="col-sm-4 offset-sm-4 btn btn-info">
            Advanced Search
          </button>
        </div>
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MyList;
