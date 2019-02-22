import React from 'react'
import Books from './Books.js'
const App = () => {
    const books = ["Moonwalking with Einstein", "GOT", "The Secret History of the World"]
    
    const mappedBooks = books.map((books, i) => <Books books={books} key={i}/>)
    
    return (
        < div >
            <h1> Books</h1>
            {mappedBooks}
        </div >
    )
}

export default App