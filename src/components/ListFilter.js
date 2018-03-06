import React, { Component } from 'react';

class ListFilter extends Component {

    render(){
        return(
            <div>
                <input type="text" id="myInput" onKeyUp={this.search} placeholder="Search for names.." title="Type in a name"/>
            </div>
        );
    }
    
    search(){
        
    }
}

export default ListFilter