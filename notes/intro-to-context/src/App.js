import React, { Component } from 'react'
import { withCounter} from './context/CounterProvider.js'

const App = props => {
        return (
            <div>
                <h1>{props.counter}</h1>
                <button onClick={props.increment}>Increments</button>
            </div>
        )
    }
export default withCounter(App)