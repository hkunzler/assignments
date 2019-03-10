// import React from 'react';
// import BooksProvider from './context/BooksProvider'


import React, { Component } from 'react';
import {withBooks} from './context/BooksProvider'

class App extends Component {
    constructor() {
        super()
        this.state = {
            titleInput: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getBooks(this.state.titleInput)
        this.setState({
            titleInput: ''
        })
    }
    render() {
        return (
            <div>
                <h1>Library</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="titleInput" value={this.state.titleInput} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <div>
                    {this.props.books.map(book => <h1>{book.title}</h1>)}
                </div>
            </div>
        );
    }
}

export default withBooks(App);