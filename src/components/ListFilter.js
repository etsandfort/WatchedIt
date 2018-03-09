import React, { Component } from 'react';
import ListItem from './ListItem';

class ListFilter extends Component {

    constructor(props){
        super(props);
        this.state={
            items: this.props.listItems,
        }
    }
    render(){
        return(
            <div>
                <input type="text" id="myInput" onKeyUp={(e) => this.filterList.bind(this,e)} placeholder="Search for names.."/>
                <select className="form-control">
                    <option>Movie</option>
                    <option>TV Series</option>
                </select>
                <select className="form-control">
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Documentary</option>
                    <option>Drama</option>
                    <option>Horror</option>
                    <option>International</option>
                    <option>Mystery</option>
                    <option>Reality</option>
                    <option>Romance</option>
                    <option>Sci-Fi/Fantasy</option>
                    <option>Thriller</option>
                </select>
            </div>
        );
    }
    
    filterList(event){
        var updatedList = this.props.listItems;
        updatedList = updatedList.filter(function(item){
          return item.props.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }
}

ListFilter.defaultProps = {
    listItems: [],
}

export default ListFilter