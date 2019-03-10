import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import MovieProvider from './context/MovieProvider'

ReactDOM.render(<MovieProvider><App /></MovieProvider>, document.getElementById('root'))