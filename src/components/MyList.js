import React, { Component } from 'react';
import './includes/MyList.css';
import ReactTable from 'react-table';

class MyList extends Component {

  constructor(props){
    super(props);
    this.state={
      showFilter: false
    };
  }

  render() {
    const data = this.makeList();
    
    const columns = [{
      Header: '#',
      accessor: 'number',
      sortable: false,
	  width: 20
    }, {
      Header: 'Image',
      accessor: 'image',
      sortable: false,
      Cell: row => <img src={row.value} alt="Title Card" width="100px" height="100px" />
    }, {
      Header: 'Title',
      accessor: 'title',
      filterable: this.state.showFilter
    }, {
      Header: 'My Score',
      accessor: 'myScore',
    }, {
      Header: 'Global Score',
      accessor: 'globalScore' ,
    }, {
      Header: 'Friend\'s Score',
      accessor: 'friendScore' 
    }, {
      Header: 'Type',
      accessor: 'type',
      filterable: this.state.showFilter
    }, {
      Header: 'Genres',
      accessor: 'genres',
      sortable: false,
      Cell: row => (
        <ul>
          {row.value.map(function(name, index){
            return <li key={ index }>{name}</li>;
          })}
        </ul>)
    }, {
      Header: '',
      accessor: 'title',
      Cell: row => <button type="button" className="btn btn-primary"
                    onClick={ this.props.listStatusToggler.bind(this, row.value)}>Remove from List</button>,
      sortable: false,
    }];

    let defaultFilterMethod = (filter, row, column) => {
      const id = filter.pivotId || filter.id
      return row[id] !== undefined ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase()) : true
    }
    let results = data.length === 0? <p>There's nothing on your List! Click "Add a Show/Movie" to add to your list</p>:
      <ReactTable
      noDataText="Oh Noes!"
      className="-highlight"
      data={data}
      columns={columns} 
      minRows={1}
      showPagination={false}
      defaultFilterMethod={defaultFilterMethod}/>;
    return (
      <div className="MyList">
        <header className="MyList-header">
          <h1 className="App-title">My List</h1>
        </header>
        <div className="row">
          <div className="col-sm-4 control-group">
            <button className="btn btn-primary" onClick={this.props.handler.bind(this, {currentPage: 'searchPage'})}>
              Add a Show/Movie
            </button>
          </div>
          <div className="col-sm-4 offset-sm-4">
            <button className="btn btn-info" onClick={this.toggleFilter.bind(this)}>
              Advanced Filter
            </button>
          </div>
        </div>
        <ReactTable
          noDataText={"There's nothing on your List! Click \"Add a Show/Movie\" to add to your list"}
          className="-highlight"
          data={data}
          columns={columns} 
          minRows={1}
          showPagination={false}
          defaultPageSize={10}
          defaultFilterMethod={defaultFilterMethod}
          style={{
            height: "80vh" 
          }}
          filtered={[{
            id: 'type',
            value: this.props.mediaFilter
          }]}/>
      </div>
    );
  }

  makeList(){
    var list = [];
    let i = 1;
    this.props.listItems.forEach((item)=>{
      if(item.onMyList){
        list.push({
          number: i,
          image: item.image,
          title: item.title,
          myScore: item.myScore,
          globalScore: item.globalScore,
          friendScore: item.friendScore,
          type: item.type,
          genres: item.genres,
        });
      i++;
      }
    });
    if(this.props.mediaFilter !== "")
      list = list.filter(item => item.type===this.props.mediaFilter);
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
  listItems: [],
  mediaFilter: ""
}
export default MyList;
