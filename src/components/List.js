import React, { Component } from 'react';
import ListItem from './ListItem';
import ListFilter from './ListFilter';

class List extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        return(
            <div>
            <ListFilter/>
            <table>
                <thead>
                    <tr>
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
        );
    }

    makeList(){
        var list = [];
        for(var i=0; i<10; i++){
          list.push(<ListItem key={i} />);
        }
        return list;
      }
}

List.defaultProps = {};
export default List;