import React, { Component } from 'react';
import './includes/App.css';
import ReactTable from 'react-table'

class MyList extends Component {
  render() {
    const data = [{
      name: 'Bob Ross',
      age: 46,
      friend: {
        name: 'Kappa Ross',
        age: 13,
      }
    },
    {
      name: 'Dans Gaming',
      age: 26,
      friend: {
        name: 'Pog Champ',
        age: 23,
      }
    },
    {
      name: 'Jotaro Joestar',
      age: 16,
      friend: {
        name: 'Star Platinum',
        age: 20,
      }
    }];
  
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
    return (
      <div className="MyList container">
      <header className="row">
          <h1 className="App-title">MyList</h1>
        </header>
        <div className="row">
          <div className="col-sm-4 control-group">
            <div className="btn-toolbar">
            <button className="btn btn-primary">
              Add a Show/Movie
            </button>
            </div>
          </div>
          <div className="col-sm-4 offset-sm-4">
            <div className="btn-toolbar">
            <button className="btn btn-info">
              Advanced Search
            </button>
            </div>
          </div>
        </div>
        <ReactTable
          data={data}
          columns={columns} />
      </div>
    );
  }
}

export default MyList;
