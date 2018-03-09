import React, { Component } from 'react';
import './includes/App.css';
import './includes/SearchPage.css';

class SearchPage extends Component {
  render() {
    return (
        <div className="flex-container">
            <div className="searchPage-content">
            <form>
              <input type="text" name="search" placeholder="Search.."/>
            </form>
                <h2 style={{paddingLeft: 15}} align="left">Amazon</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                            <td><img src="https://cdn.frankerfacez.com/emoticon/132023/4"/></td>
                        </tr>
                    </tbody>
                </table>
                <h2 style={{paddingLeft: 15}} align="left">HBO</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                            <td><button className="btn btn-primary btn-lg btn-block"><img src="https://i.imgur.com/AampuvT.png"/></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
}

export default SearchPage;