import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import TodoProvider from './context/TodoProvider.js'

ReactDOM.render(<TodoProvider><App/></TodoProvider>, document.getElementById('root'))