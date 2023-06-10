import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Card, CardImg, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import './Book.css';

export default class Book extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Col md={4}>
                <div className='image shadow-lg' >
                    <img className='shadow-2-strong ' src={`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-L.jpg`} alt='book poster' height={"450px"} width={"310px"} />

                    <Dropdown as={ButtonGroup} className='rounded-circle'>
                        <Dropdown.Toggle variant="success" className='rounded-circle dropdown shadow-lg' />
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.props.addCurrentlyReading(this.props.book, this.props.from)} href="#/action-1">Currently Reading</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.addWantToRead(this.props.book, this.props.from)} href="#/action-2">Want to Read</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.addRead(this.props.book, this.props.from)} href="#/action-3">Read</Dropdown.Item>
                            {this.props.from ? <Dropdown.Item onClick={() => this.props.remove(this.props.book, this.props.from)} href="#/action-4">None</Dropdown.Item> : ''}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <p className='title mb-0'>
                    {this.props.book.title}
                </p>
                <p className='author text-muted'>
                    {this.props.book.author_name[0]}
                </p>
            </Col>
        );
    }
}