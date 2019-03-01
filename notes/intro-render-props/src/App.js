import React from 'react'
import Toggle from './shared/Toggle.js'

const App = (props) => {
        return (
            <div>
                <Toggle render={({ isToggled, toggler }) => 
                    <>
                        <h1>The light is {isToggled ? "On" : "Off"}</h1>
                        <button onClick={toggler}>Turn {isToggled ? "Off" : "On"} light</button>
                        </>
                    }/>
            </div>
        )
}
{/* <Form 
    render={props => <TodoForm {...props} />}
    inputs={{ title: "", description: "" }}
    submit={inputs => props.addTodo(inputs)}
    /> */}

export default App