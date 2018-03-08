import React, { Component } from 'react';
import titleCard from '../images/mrmime.jpg';
import './includes/App.css';
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
                <td className='col-xs-1'>
                    {this.props.id}
                </td>
                <td className='col-xs-2'>
                    <img src={titleCard} className="title card" alt="logo" />
                </td>
                <td className='col-xs-2'>
                    {this.props.title}
                </td>
                <td className='col-xs-1'>
                    {this.props.myScore}
                </td>
                <td className='col-xs-1'>
                    {this.props.globalScore}
                </td>
                <td className='col-xs-1'>
                    {this.props.friendScore}
                </td>
                <td className='col-xs-2'>
                    {this.props.type}
                </td>
                <td className='col-xs-2'>
                    <button type="button" 
                    onClick={this.addToList.bind(this)} 
                    className="btn btn-primary">
                        {buttonText}
                    </button>
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
    id: null,
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