import React, { Component } from 'react';
import ListItem from './ListItem';
import ListFilter from './ListFilter';
import './includes/App.css';

class MyList extends Component {

  constructor(props){
    super(props);
    this.state={
      showFilter: false
    };
  }
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
          <button className="col-sm-4 offset-sm-4 btn btn-info" onClick={this.toggleFilter.bind(this)}>
            Advanced Search
          </button>
        </div>
        <div>
          {this.state.showFilter && <ListFilter listItems={this.props.listItems} />}
        </div>
        <div className="row">
          <table className="table table-dark">
            <thead>
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Title</th>
              <th>My Score</th>
              <th>Global Score</th>
              <th>Friends Score</th>
              <th>Category</th>
              <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.makeList()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  makeList(){
    var list = [];
    let i = 0;
    for(var item in this.props.listItems){
      list.push(<ListItem key={i} id={i+1} />);
      i++;
    }
    return list;
  }

  toggleFilter(){
    this.setState({showFilter: !(this.state.showFilter)});
  }

}


MyList.defaultState = {
  showFilter: false,
}

MyList.defaultProps = {
  listItems: [<ListItem title="Star wars"/>, 
  <ListItem title="men in black"/>,
  <ListItem title="also star wars"/>
],
}
export default MyList;
