import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';
import Search from './Search';
import Book from './Book';

class App extends React.Component {
  constructor() {
    super();
    this.state = { bookList: [], currentlyReading: [], wantToRead: [], read: [], showBooks: true };
    this.setBookList = this.setBookList.bind(this);
    this.addCurrentlyReading = this.addCurrentlyReading.bind(this);
    this.addWantToRead = this.addWantToRead.bind(this);
    this.addRead = this.addRead.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }
  setBookList(books) {
    this.setState({ bookList: books });
  };
  handleBackClick() {
    this.setState({ showBooks: !this.state.showBooks })
  }
  removeBook(book, from) {
    if (from === 'currentlyReading')
      this.setState({
        currentlyReading: this.state.currentlyReading.filter(function (item) {
          return item !== book;
        })
      });
    else if (from === 'wantToRead')
      this.setState({
        wantToRead: this.state.wantToRead.filter(function (item) {
          return item !== book;
        })
      });
    else if (from === 'Read')
      this.setState({
        read: this.state.read.filter(function (item) {
          return item !== book;
        })
      });
  }
  addCurrentlyReading(book, from) {
    if (from) {
      this.removeBook(book, from);
    }
    this.setState({ currentlyReading: [...this.state.currentlyReading, book] });
  }
  addWantToRead(book, from) {
    if (from) {
      this.removeBook(book, from);
    }
    this.setState({ wantToRead: [...this.state.wantToRead, book] });
  }
  addRead(book, from) {
    if (from) {
      this.removeBook(book, from);
    }
    this.setState({ read: [...this.state.read, book] });
  }

  render() {
    return (
      <div className="App" >
        {this.state.showBooks ? (
          <div>
            <h1 className='header text-white text-center'>
              MyReads
            </h1>
            <h2 className='px-2 min-header'>Currently Reading</h2>
            <Container>
              <Row>
                {this.state.currentlyReading.map(book => {
                  return <Book book={book} addCurrentlyReading={this.addCurrentlyReading} addWantToRead={this.addWantToRead} addRead={this.addRead} remove={this.removeBook} from='currentlyReading'></Book>
                })}
              </Row>
            </Container>
            <h2 className='px-2 min-header'>Want to Read</h2>
            <Container>
              <Row>
                {this.state.wantToRead.map(book => {
                  return <Book book={book} addCurrentlyReading={this.addCurrentlyReading} addWantToRead={this.addWantToRead} addRead={this.addRead} remove={this.removeBook} from='wantToRead'></Book>
                })}
              </Row>
            </Container>
            <h2 className='px-2 min-header'>Read</h2>
            <Container>
              <Row>
                {this.state.read.map(book => {
                  return <Book book={book} addCurrentlyReading={this.addCurrentlyReading} addWantToRead={this.addWantToRead} addRead={this.addRead} remove={this.removeBook} from='Read'></Book>
                })}
              </Row>
            </Container>
            <button onClick={() => this.setState({ showBooks: !this.state.showBooks })} className='rounded-circle success search-btn'>
              +
            </button>
          </div>) :
          <div>
            <Search setParentState={this.setBookList} handleClick={this.handleBackClick}></Search>
            <Container>
              <Row className='align-items-end'>
                {this.state.bookList.length ? this.state.bookList.map(book => {
                  return <Book book={book} addCurrentlyReading={this.addCurrentlyReading} addWantToRead={this.addWantToRead} addRead={this.addRead} remove={this.removeBook}></Book>
                }) : ''}
              </Row>
            </Container>
          </div>
        }


      </div>
    );
  }
}

export default App;
