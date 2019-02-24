import React from 'react'
import CounterControls from './CounterControls.js'
import CounterDisplay from './CounterDisplay.js'

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    handleIncrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    handleDecrement = () => {
        this.setState(prevState => {
            return {
                counter:prevState.counter - 1
            }
        })
    }
    handleDivideBy2= () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter / 2
            }
        })
    }
    handleMultiplyBy2 = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter * 2
            }
        })
    }
    render() {
        return (
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <CounterControls
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    handleDivideBy2={this.handleDivideBy2}
                    handleMultiplyBy2={this.handleMultiplyBy2}
                />
            </div>
        )
    }
}

export default App