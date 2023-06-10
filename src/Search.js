import React from 'react';
import './Search.css';
import img from './back.png'
export default class Search extends React.Component {

    handleChange(e) {
        fetch(`https://openlibrary.org/search.json?author=${e.target.value}`)
            .then(response => response.json())
            .then(response => this.props.setParentState(response.docs));
    };
    render() {
        return (
            <div className='d-flex mb-4 align-items-center'>
                <img onClick={this.props.handleClick} src={img} alt='back' height={'20px'}></img>
                <input
                    className='w-100'
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }
}