import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './includes/App.css';
import './includes/Discover.css';

class Discover extends Component {

  render() {
    let genres = ["Action", "Adventure", "Comedy",
                  "Documentary", "Drama", "Horror",
                  "Mystery", "Romance", "Sci-Fi",
                  "Fantasy"];
    let elements =[];
    genres.forEach(genre => elements.push(this.createGenreRow(genre)))
    return (
      <div className="Discover">
        <div className="flex-container">
          <div className="discover-content">
            <div className="Discover-Tab">
              <div className="Discover-Tab-Option">Trending</div>
              <div className="Discover-Tab-Option">New Releases</div>
              <div className="Discover-Tab-Option">Genres</div>
              <div className="Discover-Tab-Option">Search</div>
            </div>
            {elements}
          </div>
        </div>
      </div>
    );
  }

  loadShowInfo(element){
    this.props.showInfoPageSetter(element.title);
    this.props.handler({currentPage: "showInfo"});
  }
 createGenreRow(genre){
    let list = [];
    let i=0;
    this.props.listItems.forEach(element => {
      if(element.genres.includes(genre)){
        list.push(
          <td key={i}>
            <div className="Discover-Title-Card">
            <img src={element.image} alt={element.title} onClick={this.loadShowInfo.bind(this, element)}/>
            <p>{element.title}</p>
            </div>
          </td>
        );
        i++;
      }
    });
    return(
      <div key={genre}>
      <h2 style={{paddingLeft: 15}} align="left">{genre}</h2>
	  <Scrollbars style={{ height: 242}} className="Discover-Table-Scroll">
      <table className="table">
        <tbody>
          <tr>
            {list}
          </tr>
        </tbody>
      </table>
	  </Scrollbars>
      </div>
    );

  }
}


Discover.defaultProps = {
  listItems: [],
}
export default Discover;