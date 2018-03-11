import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './includes/App.css';
import './includes/Discover.css';

class Discover extends Component {
  constructor(props){
    super(props);
    this.state={
      category:"Genres"
    }
  }
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
              <div className={"Discover-Tab-Option" + (this.state.category === "Trending" ? " Discover-Tab-Hover" : "")} onClick={this.props.handler.bind(this, {currentPage: "myList", mediaFilter: ""})} onClick={this.loadCategoryPage.bind(this,"Trending")}>Trending</div>
              <div className={"Discover-Tab-Option" + (this.state.category === "NewReleases" ? " Discover-Tab-Hover" : "")} onClick={this.loadCategoryPage.bind(this,"NewReleases")}>New Releases</div>
              <div className={"Discover-Tab-Option" + (this.state.category === "Genres" ? " Discover-Tab-Hover" : "")} onClick={this.loadCategoryPage.bind(this,"Genres")}>Genres</div>
              <div className={"Discover-Tab-Option" + (this.state.category === "searchPage" ? " Discover-Tab-Hover" : "")} onClick={this.props.handler.bind(this, {currentPage: 'searchPage'})}>Search</div>
            </div>
            <hr/>
            <div className="ListsContainer">
              <Scrollbars style={{height: "85vh"}}
               autoHide
               autoHideTimeout={0}
               autoHideDuration={100}>
              <div className="Lists">
                {elements}
              </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    );
  }

  loadCategoryPage(page){
    this.setState({category: page});
  }

  loadShowInfo(element){
    this.props.showInfoPageSetter(element.title);
    this.props.handler({currentPage: "showInfo"});
  }

 createGenreRow(genre){
    let finalList = [];
    let i=0;
    let listToFilter =[]
    if(this.state.category === "Trending"){
      this.props.listItems.forEach(element => {
        if(element.globalScore >= 8.0){
          listToFilter.push(element);
        }
      });
    } else if(this.state.category === "NewReleases"){
      this.props.listItems.forEach(element => {
        if(element.year >= 2010){
          listToFilter.push(element);
        }
      });
    } else {
      listToFilter=this.props.listItems;
    }
    listToFilter.forEach(element => {
      if(element.genres.includes(genre)){
        finalList.push(
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
    if(finalList.length===0){
      finalList.push(<td key={0}>
        <div className="Discover-Title-Card">
          <p>No Shows or Movies</p>
        </div>
      </td>)
    }
    if(finalList.length<6){
      for(i=finalList.length; i<6; i++){
        finalList.push(<td key={i}>
        <div className="Discover-Title-Card">
      </div></td>)
      }
    }
    return(
      <div key={genre}>
      <h2 style={{paddingLeft: 15}} align="left">{genre}</h2>
	  <Scrollbars style={{ height: 282}} className="Discover-Table-Scroll">
      <table className="table" style={{width: 180*finalList.length, borderTop:"none"}}>
        <tbody style={{width: 180*finalList.length}}>
          <tr>
            {finalList}
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