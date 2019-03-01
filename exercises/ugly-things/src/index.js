import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import UglyProvider from './context/UglyProvider.js'

ReactDOM.render(<UglyProvider><App/></UglyProvider>, document.getElementById('root'))