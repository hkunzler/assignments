import React, { Component } from 'react'

// Higher order components - HOC
//      They are components that either
//          Take a component as an arguement
//          Or/And return a component
class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            isToggled: false
        }
    }

    toggler = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }
    render() {
        const { component } = this.props
        const C = component
        return (
            <div>
                <C isToggled={this.state.isToggled} toggler={this.toggler}/>
            </div>
        )
    }
}

export const withToggler = C => props => <Toggle component={C}{...props}/>
