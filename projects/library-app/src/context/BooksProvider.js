import React, { Component } from 'react';
import axios from 'axios'

const BooksContext = React.createContext()

class BooksProvider extends Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }
    getBooks = (titleInput) => {
        axios.get(`https://www.goodreads.com/search.xml?key=gby7e13TRZovy5vWhXUwUA&q={titleInput}`).then(response => {
            this.setState({
                books: response.data.books
            })
        }).catch(error => console.log(error))
    }
    render() {
        return (
            <BooksContext.Provider
                value={{
                    getBooks: this.getBooks,
                    books: this.state.books
            }}>
                {this.props.children}
            </BooksContext.Provider>
        );
    }
}

export default BooksProvider;

export const withBooks = C => props => (
    <BooksContext.Consumer>
        {value => <C {...props}{...value}/>}
    </BooksContext.Consumer>
)