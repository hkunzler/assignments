import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import BooksProvider from './context/BooksProvider'

ReactDOM.render(<BooksProvider><App/></BooksProvider>, document.getElementById('root'))