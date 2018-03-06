import React, { Component } from 'react';

class ListFilter extends Component {

    render(){
        return(
            <div>
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"/>
            </div>
        );
    }
}

export default ListFilter