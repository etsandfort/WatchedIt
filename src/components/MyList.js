import React, { Component } from 'react';
import './includes/MyList.css';
import ReactTable from 'react-table';

class MyList extends Component {

  constructor(props){
    super(props);
    this.state={
      showFilter: false,
      itemsToDisplay: props.listItems,
      inputValue: ''
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
        <div className="MyList-buttons row">
          <div className="col-sm-4">
            <button className="btn btn-lg btn-primary" onClick={this.props.handler.bind(this, {currentPage: 'searchPage'})}>
              Add a Show/Movie
            </button>
          </div>
          <div className="col-sm-4 offset-sm-4">
            <button className="btn btn-lg btn-info" onClick={this.toggleFilter.bind(this)}>
              Advanced Filter
            </button>
          </div>
        </div>
        <div className="row">
          <form className="col-sm-10 offset-sm-1">
            <input className="form-control" type="text" name="search" placeholder="Search..." 
            value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} autoFocus="true"
            style={{visibility: this.state.showFilter ? "visible" : "hidden"}}/>
          </form>
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
    this.state.itemsToDisplay.forEach((item)=>{
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

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    }, this.filter);
  }

  filter(){
    let itemsToDisplay = [];
    if(this.state.inputValue==='') {
      itemsToDisplay = this.props.listItems;
    }
    else {
      this.props.listItems.forEach(element => {
        if(element.title.toLowerCase().includes(this.state.inputValue.toLowerCase())){
          itemsToDisplay.push(element);
        }
      });
    }
    this.setState({itemsToDisplay: itemsToDisplay});
  }
}


MyList.defaultState = {
  showFilter: false,
  itemsToDisplay: []
}

MyList.defaultProps = {
  listItems: [],
  mediaFilter: ""
}
export default MyList;
