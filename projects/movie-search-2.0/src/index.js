import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import MovieProvider from './context/MovieProvider'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <MovieProvider>
            <App />
        </MovieProvider>
    </BrowserRouter>,
    document.getElementById('root'))