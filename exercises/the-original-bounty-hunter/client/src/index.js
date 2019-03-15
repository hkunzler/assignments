import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import BountyProvider from './context/BountyProvider'

ReactDOM.render(<BountyProvider><App/></BountyProvider>, document.getElementById('root'))