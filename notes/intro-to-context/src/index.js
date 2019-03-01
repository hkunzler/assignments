import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import CounterProvider from './context/CounterProvider.js'

ReactDOM.render(
    <CounterProvider><App /></CounterProvider>, document.getElementById('root'))