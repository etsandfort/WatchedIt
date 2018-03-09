import React, { Component } from 'react';
import './includes/App.css';
import './includes/SearchPage.css';
import ReactTable from 'react-table';

class SearchPage extends Component {
  render() {
    const data = this.makeList();

    const columns = [{
      Header: 'Image',
      accessor: 'image',
      sortable: false,
      Cell: row => <img src={row.value} alt="Title Card" width="100px" height="100px" />
    }, {
      Header: 'Title',
      accessor: 'title',
    }, {
      Header: 'Global Score',
      accessor: 'globalScore' ,
    }, {
      Header: 'Type',
      accessor: 'type',
    }, {
      Header: '',
      Cell: row => <button type="button" className="btn btn-primary">Add to List</button>,
      sortable: false,
    }];
    
    return (
      <div className="SearchPage">
      <div className="flex-container">
      <div className="searchPage-content">
      <form>
        <input type="text" name="search" placeholder="Search.."/>
      </form>
        <ReactTable
          className="-highlight"
          data={data}
          columns={columns} 
          minRows={1}
          showPagination={false} />
      </div>
      </div>
      </div>
    );
  }

  makeList(){
    var list = [];
    let i = 1;
    this.props.listItems.forEach((item)=>{
      console.log(item.onMyList);
      list.push({
        number: i,
        image: item.image,
        title: item.title,
        myScore: item.myScore,
        globalScore: item.globalScore,
        friendScore: item.friendScore,
        type: item.type,
        genres: item.genres
      });
      i++;
    });
    return list;
  }
  toggleFilter(){
    this.setState({showFilter: !(this.state.showFilter)});
  }
}



SearchPage.defaultState = {
  showFilter: false,
}

SearchPage.defaultProps = {
  listItems: [],
}

export default SearchPage;