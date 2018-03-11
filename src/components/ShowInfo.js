import React, { Component } from 'react';
import './includes/ShowInfo.css';

class ShowInfo extends Component {

    listReviews(){
        let reviews = [];
        let reviewers = [];
        for(var i = 0; i<this.props.showInfo.reviews.length; i++){
            reviews.push(
                <tr key={i+"review"}>
                    <td>
                        {this.props.showInfo.reviews[i]}
                    </td>
                </tr>);
        }

        for(i = 0; i<this.props.showInfo.reviewers.length; i++){
            reviewers.push(
                <tr className="space-above" key={i+"reviewer"}>
                <   td><b>{this.props.showInfo.reviewers[i]}</b></td>
                </tr>);
        }
        
        let ret = [];
        for(i = 0; i<this.props.showInfo.reviewers.length; i++){
            ret.push(reviewers[i]);
            ret.push(reviews[i]);
        }
        
        return ret;
    }

    render() {
        let reviews = this.listReviews();
        let buttonText = this.props.showInfo.onMyList? "Remove from List" : "Add to List";
        return (
            <div className="flex-container">
                <div className="quick-info">
                    <img src={this.props.showInfo.image} className="Show-poster" alt="poster" style={{ height: 350, width: 200, paddingBottom: 20 }}/>
                    <table className="quick-info-table">
                        <tbody>
                            <tr>
                                <td><b>Genre:</b></td>
                                <td>{this.props.showInfo.genres.join(",")}</td>
                            </tr>
                            <tr>
                                <td><b>Rating:</b></td>
                                <td>{this.props.showInfo.rating}</td>
                            </tr>
                            <tr>
                                <td><b>Global Rating:</b></td>
                                <td>{this.props.showInfo.globalScore}</td>
                            </tr>
                            <tr>
                                <td><b>User Rating:</b></td>
                                <td>{this.props.showInfo.myScore}</td>
                            </tr>
                        </tbody>
                    </table>
					<button type="button" className="btn btn-primary btn-md" onClick={ this.props.listStatusToggler.bind(this, this.props.showInfo.title)}>{buttonText}</button>
                </div>
                <div className="movie-info">
                    <h2>{this.props.showInfo.title} ({this.props.showInfo.year})</h2>
                    <h5>Synopsis</h5>
                    <p>
                    {this.props.showInfo.synopsis}
                    </p>
                    <h5>User Reviews</h5>
                    <table className="user-review-table">
                        <tbody>
                            {reviews}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

ShowInfo.defaultProps = {
    showInfo: {},
}
export default ShowInfo;