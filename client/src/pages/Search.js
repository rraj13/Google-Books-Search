import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Nav from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import SearchCard from '../components/SearchCard/SearchCard';
import ResultsCard from '../components/ResultsCard/ResultsCard';
import SaveBtn from '../components/SaveBtn/SaveBtn';

class Search extends Component {

    state = {
        books: [],
        inputTitle: ""
    }

    //queries Google Books API 
    searchBooks = query => {
        API.search (query)
            .then(res => {
                this.setState({
                    books: res.data.items,
                    inputTitle: ''
                });
            })
            .catch(err => console.log(err))
    }
    
    // handles form submit and runs google books query
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.inputTitle);
    }

    //manipulates title state value
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    //re-renders displayed list of resulting books from google API after a user chooses to save a title
    handleSaveReRender = (id) => {
        const updatedBooks = this.state.books.filter(book => book.id !== id);

        this.setState({
            books: updatedBooks
        });
    }

    //sets up redirect function to allow user to view google book source page
    bookInfoRedirect = (link) => {
        window.location.assign(link)
    }

    render() {
        return (
            <div>
                <Nav>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item active'>
                                <Link to='/' className='nav-link'>Search</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/saved' className='nav-link'>Saved</Link>
                            </li>
                        </ul>
                    </div>
                </Nav>
                <Jumbotron>
                    <h1 className='text-center'>Google Books Search</h1>
                    <h2 className='text-center lead'>Search for and save books of interest!</h2>
                    <p className='text-center lead'>Proudly built with React <i class="fab fa-react"></i></p>
                </Jumbotron>
                <SearchCard>
                    <div className='input-group input-group-sm mb-3'>
                        <input type='text' 
                            className='form-control' 
                            aria-label='Sizing example input' 
                            aria-describedby='inputGroup-sizing-sm' 
                            placeholder='e.g. The Great Gatsby' 
                            name='inputTitle'
                            value={this.state.inputTitle}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className='text-sm-left text-lg-right'>
                        <button  
                            className='btn btn-primary text-sm-left text-ld-right' 
                            onClick={this.handleFormSubmit}>Search
                        </button>
                    </div>
                </SearchCard>
                <ResultsCard>
                    {this.state.books.length ? (
                        <div className='card-body'>
                            {this.state.books.map(book => (
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-sm-12 col-md-6'>
                                                    <p className='font-italic book-title'>{book.volumeInfo.title}</p> 
                                                </div>
                                                <div className='col-sm-12 col-md-6 text-sm-left text-md-right'>
                                                    <button className='btn btn-success mr-1' onClick={() => this.bookInfoRedirect(book.volumeInfo.infoLink)}>View</button>
                                                    <SaveBtn  
                                                        className='btn btn-primary' 
                                                        id={book.id}
                                                        title={book.volumeInfo.title}
                                                        authors={book.volumeInfo.authors}
                                                        description={book.volumeInfo.description}
                                                        image={book.volumeInfo.imageLinks.thumbnail}
                                                        link={book.volumeInfo.infoLink}
                                                        handleSaveReRender={this.handleSaveReRender}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'><p className='font-italic book-author mt-1'>Written by {book.volumeInfo.authors.join(", ")}</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-2'>
                                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} thumbnail`} className='mb-2 img-fluid' />
                                                </div>
                                                <div className='col-md-10'>
                                                    <p className='book-description'>{book.volumeInfo.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-center mt-2'><strong>Search for a book to begin!</strong></p>
                    )}
                </ResultsCard>
            </div>
        )
    }
}


export default Search;