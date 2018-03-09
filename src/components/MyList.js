import React, { Component } from 'react';
import './includes/MyList.css';
import ReactTable from 'react-table';

class MyList extends Component {
  render() {
    const data = [{
      number: 1,
      image: "images/highground.jpg",
      title: "Star Wars Episode 3: Revenge of the Sith",
      myScore: 9.2,
      globalScore: 6.9,
      friendScore: 9.5,
      type: "Movie",
      genres: ["Sci-Fi", "Fantasy"]
    },
    {
      number: 2,
      image: "images/duel.jpg",
      title: "Yu-Gi-Oh! The Dark Side of Dimensions",
      myScore: 10,
      globalScore: 10,
      friendScore: 10,
      type: "Movie",
      genres: ["Lit", "Children's Card Games"]
    },
    {
      number: 3,
      image: "images/jojo.jpg",
      title: "JoJo's Bizarre Adventure",
      myScore: 10,
      globalScore: 9.5,
      friendScore: 9.8,
      type: "TV",
      genres: ["Baby Stand", "Nani"]
    }];
  
    const columns = [{
      Header: '#',
      accessor: 'number'
    }, {
      Header: 'Image',
      accessor: 'image',
      Cell: row => <img src={row.value} alt="Title Card" width="100px" height="100px" />
    }, {
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'My Score',
      accessor: 'myScore'
    }, {
      Header: 'Global Score',
      accessor: 'globalScore' 
    }, {
      Header: 'Friend\'s Score',
      accessor: 'friendScore' 
    }, {
      Header: 'Type',
      accessor: 'type' 
    }, {
      Header: 'Genres',
      accessor: 'genres',
      Cell: row => (
        <ul>
          {row.value.map(function(name, index){
            return <li key={ index }>{name}</li>;
          })}
        </ul>)
    }];
    return (
      <div className="MyList">
        <header className="MyList-header">
          <h1 className="App-title">MyList</h1>
        </header>
        <div className="row">
          <div className="col-sm-4 control-group">
            <button className="btn btn-primary">
              Add a Show/Movie
            </button>
          </div>
          <div className="col-sm-4 offset-sm-4">
            <button className="btn btn-info">
              Advanced Search
            </button>
          </div>
        </div>
        <ReactTable
          className="-highlight"
          data={data}
          columns={columns} 
          minRows={1}
          showPagination={false} />
      </div>
    );
  }
}

export default MyList;
