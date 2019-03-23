import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import SavedCard from '../components/SavedCard/SavedCard';
import DeleteBtn from '../components/DeleteBtn/DeleteBtn';
import API from '../utils/API';

class Saved extends Component {

    state = {
        savedBooks: []
    }

    // loads saved books on initial page render
    componentDidMount() {
        API.getBooks().then(res => {
            this.setState({
                savedBooks: res.data
            });
        });
    }

    // re-renders list of saved books if a user decides to delete a book from the saved collection
    handleDeleteReRender = (id) => {

        let updatedSaved = this.state.savedBooks.filter(book => book._id !== id);
        
        this.setState({
            savedBooks: updatedSaved
        })
    }

    //sets up redirect function to allow user to view google book source page
    bookInfoRedirect = (link) => {
        window.location.assign(link)
    }

    render() {
        return (
            <div>
                <Navbar>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Search</Link>
                            </li>
                            <li className='nav-item active'>
                                <Link to='/saved' className='nav-link'>Saved</Link>
                            </li>
                        </ul>
                    </div>
                </Navbar>
                <Jumbotron>
                    <h1 className='text-center'>Saved Books</h1>
                    <h2 className='text-center lead'>View and edit your saved books here!</h2>
                </Jumbotron>
                <SavedCard>
                    {this.state.savedBooks.length ? (
                        <div className='card-body'>
                            {this.state.savedBooks.map(book => (
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-sm-12 col-md-6'>
                                                    <p className='font-italic book-title'>{book.title}</p> 
                                                </div>
                                                <div className='col-sm-12 col-md-6 text-sm-left text-md-right'>
                                                    <button className="btn btn-success mr-1" onClick={() => this.bookInfoRedirect(book.link)}>View</button>
                                                    <DeleteBtn id={book._id} handleDeleteReRender={this.handleDeleteReRender}/> 
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'><p className='font-italic book-author mt-1'>Written by {book.authors.join(", ")}</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-2'>
                                                    <img src={book.image} alt={`${book.title} thumbnail`} className='mb-2 img-fluid' />
                                                </div>
                                                <div className='col-md-10'>
                                                    {book.description ? (
                                                        <p className='book-description'>{book.description}</p>
                                                    ) : (
                                                        <p className='book-description font-italic'>No summary available</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-center mt-2'>No books saved!</p>
                    )}
                </SavedCard>
            </div>
        )
    }
}

export default Saved;