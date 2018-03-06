import React, { Component } from 'react';
import titleCard from '../images/mrmime.jpg';
class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            added: false,
        };
    }

    render(){
        let buttonText = this.state.added ? 'Remove': 'Add';
        return (
            <tr>
                <td>
                <img src={titleCard} className="title card" alt="logo" />
                </td>
                <td>
                    {this.props.title}
                </td>
                <td>
                    {this.props.myScore}
                </td>
                <td>
                    {this.props.globalScore}
                </td>
                <td>
                    {this.props.friendScore}
                </td>
                <td>
                    {this.props.type}
                </td>
                <td>
                    <button type="button" onClick={this.addToList.bind(this)}>{buttonText}</button>
                </td>
            </tr>
        );
    }

    addToList(){
        this.setState({added: !(this.state.added)});
    }
}

ListItem.defaultProps = {
    key: null,
    title: 'Default Title',
    myScore: 0,
    globalScore: 0,
    friendScore: 0,
    type: 'Default Type',
}

ListItem.defaultState = {
    added: false,
}
export default ListItem;