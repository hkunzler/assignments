import React, { Component } from 'react'
import {withTodos} from './context/TodoProvider.js'

class App extends Component {
    componentDidMount() {
        axios.get('https://api.vschool.io.kunzler/todo').then(response => {
            this.setState({
                todos:response.data
            })
        }).catch(error => console.log(error))
    }

    render(){
        return (
            <div>
                {this.state.todos.map(todo => (
                    <div style={{backgroundImage:`url(${todo.imgUrl})`, backgroundSize: 'cover'}}>
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                        <p>Price: {todo.price}</p>
                    </div>
                ))}

            </div>
        )
    }
}

export default App