import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
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
      accessor: 'imageAndTitle',
      sortable: false,
      Cell: row => <img src={row.value.image} alt="Title Card" onClick={this.loadShowInfo.bind(this, row.value.title)}/>
    }, {
      Header: 'Title',
      accessor: 'imageAndTitle.title',
      Cell: row => <p onClick={this.loadShowInfo.bind(this, row.value)}>{row.value}</p>
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
      accessor: 'imageAndTitle.title',
      Cell: row => <button type="button" className="btn btn-primary"
                    onClick={ this.props.listStatusToggler.bind(this, row.value)}>Remove from List</button>,
      sortable: false,
    }];

    let defaultFilterMethod = (filter, row, column) => {
      const id = filter.pivotId || filter.id
      return row[id] !== undefined ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase()) : true
    }

    let noResults = this.state.inputValue === "" ?
    "There's nothing on your List! Click \"Add a Show/Movie\" to add to your list" :
    "No search results found";

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
          <input className="form-control col-sm-10 offset-sm-1" id="search" type="text" name="search" 
          placeholder="Search..." value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} 
          autoFocus="true" style={{visibility: this.state.showFilter ? "visible" : "hidden"}}
          ref={input => input && input.focus()}/>
        </div>
		<Scrollbars style={{height: "70vh"}}>
        <ReactTable
          noDataText={noResults}
          className="-highlight"
          data={data}
          columns={columns} 
          minRows={1}
          showPagination={false}
          defaultPageSize={10}
          defaultFilterMethod={defaultFilterMethod}
          style={{
            height: "70vh" 
          }}
          filtered={[{
            id: 'type',
            value: this.props.mediaFilter
          }]}/>
		  </Scrollbars>
      </div>
    );
  }

  makeList(){
    var list = [];
    let i = 1;
    let itemsToDisplay = this.state.itemsToDisplay;
    if(this.props.mediaFilter !== "")
      itemsToDisplay = itemsToDisplay.filter(item => item.type===this.props.mediaFilter);
    itemsToDisplay.forEach((item)=>{
      if(item.onMyList){
        list.push({
          number: i,
          imageAndTitle: {image: item.image, title: item.title},
          myScore: item.myScore,
          globalScore: item.globalScore,
          friendScore: item.friendScore,
          type: item.type,
          genres: item.genres,
        });
      i++;
      }
    });
    return list;
  }
  
  toggleFilter(){
    this.setState({
      showFilter: !(this.state.showFilter),
      inputValue: '',
      itemsToDisplay: this.props.listItems
    });
  }

  loadShowInfo(element){
    this.props.showInfoPageSetter(element);
    this.props.handler({currentPage: "showInfo"});
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
        if(element.title.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
        element.type.toLowerCase().includes(this.state.inputValue.toLowerCase())){
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
