import React, { Component } from 'react';
import poster from '../images/KungFury.jpg';
import './includes/ShowInfo.css';

class ShowInfo extends Component {

    listReviews(){
        let reviews = [];
        for(var i = 0; i<this.props.showInfo.reviews.length; i++){
            reviews.push(
            <div>
                <tr className="space-above">
                    <td><b>{this.props.showInfo.reviewers[i]}</b></td>
                </tr>
                <tr>
                    <td>
                        {this.props.showInfo.reviews[i]}
                    </td>
                </tr>
            </div>);
        }
            
        return reviews;
    }

    render() {
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
					<button type="button" className="btn btn-primary btn-md">+ Add to List</button>
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
                            {this.listReviews.bind(this)}
							<tr className="space-above">
								<td><b>Viktor Ingemarsson</b></td>
							</tr>
							<tr>
								<td>
									It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. 
									They went out and happened to things. Its just a really cool short movie that take you back to the amazing 80:s. 
									I do remember that time and some things you just wanna have back. The music, the early electronics etc etc.. The story 
									and the visuals in this movie is groundbreaking! Never have it been a short movie with this tight storyline. When it starts, 
									its on, O yes! 100% Kung Fu, 100% viking power, 100% unimaginable sounds and 100% one of the strangest short movies of all time. 
									So give yourself a 30min of time and see this master piece!
								</td>
							</tr>
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