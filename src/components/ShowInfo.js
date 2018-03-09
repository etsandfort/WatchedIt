import React, { Component } from 'react';
import poster from '../images/KungFury.jpg';
import './includes/ShowInfo.css';

class ShowInfo extends Component {
    render() {
        return (
            <div className="flex-container">
                <div className="quick-info">
                    <img src={poster} className="Show-poster" alt="poster" style={{ height: 350, width: 200, paddingBottom: 20 }}/>
                    <table className="quick-info-table">
                        <tbody>
                            <tr>
                                <td><b>Genre:</b></td>
                                <td>Action, Comedy</td>
                            </tr>
                            <tr>
                                <td><b>Rating:</b></td>
                                <td>Not Rated</td>
                            </tr>
                            <tr>
                                <td><b>Global Rating:</b></td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <td><b>User Rating:</b></td>
                                <td>10.0</td>
                            </tr>
                        </tbody>
                    </table>
					<button type="button" className="btn btn-primary btn-md">+ Add to List</button>
                </div>
                <div className="movie-info">
                    <h2>Kung Fury (2015)</h2>
                    <h5>Synopsis</h5>
                    <p>
                        During an unfortunate series of events a friend of Kung Fury is assassinated by the most dangerous kung fu master criminal of all time; 
                        Adolf Hitler, a.k.a Kung Fuhrer. Kung Fury decides to travel back in time, to Nazi Germany, in order to kill Hitler and end the Nazi empire once and for all.
                    </p>
                    <h5>User Reviews</h5>
                    <table className="user-review-table">
                        <tbody>
                            <tr className="space-above">
                                <td><b>Miroslav Kostic</b></td>
                            </tr>
                            <tr>
                                <td>
									If you are dying today, and you have survived 80's, this is what would be flashing in front of you in the moment of your death. 
									The moment when VCR start syncing your tape is precious and it pushed me back to the past. Idiotic plot is well written, 
									I was laughing sincerely. This movie is fun, entertaining and most of all, awesome. After watching it I went to the street and 
									start fighting with everyone. I think I know karate now. It seams that there is going to be Kung Fury II, and 
									I'm anxiously waiting for it from this moment on. It doesn't have any erotic scene, that is why I only gave it 9. 
									But hopefully, sequel will be filled with 80's eroticism. Thank you Thor.
                                </td>
                            </tr>
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

export default ShowInfo;