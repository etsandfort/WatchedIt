import React, { Component } from 'react';
import ReactTable from 'react-table';


class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        let defaultFilterMethod = (filter, row, column) => {
            const id = filter.pivotId || filter.id
            return row[id] !== undefined ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase()) : true
        }

        const columns = [
          {
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
              Header: 'Actions',
              Cell: row => (<button type="button" 
              onClick={this.toggleOnList.bind(row.value)} 
              className="btn btn-primary">
                  {buttonText}
              </button>)
          }];
        return(
        <div>
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

MyList.defaultProps = {
    listItems: [],
  }

export default SearchPage;