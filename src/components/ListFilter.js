import React, { Component } from 'react';

class ListFilter extends Component {

    render(){
        return(
            <div>
                <input type="text" id="myInput" onKeyUp={this.search} placeholder="Search for names.."/>
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
    
    search(){
        
    }
}

export default ListFilter