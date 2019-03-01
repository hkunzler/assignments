import React, { Component } from 'react'
import axios from 'axios'

const TodoContext = React.createContext()

class TodoProvider extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }
        getTodos = () => {
        axios.get("https://api.vschool.io/kunzler/todo/").then(response => {
            // resolve
            this.setState({
                todos: response.data
            })
        }) // reject
            .catch(error => console.log(error))
    }
    addTodo = (inputs) => {
        const { title, description, price, imgUrl } = this.state
        //POST request
        // Create OBJ
        const newTodo = {
            title,
            description,
            price,
            imgUrl
        }

        axios.post("https://api.vschool.io/kunzler/todo/", newTodo).then(response => {
            console.log(response);
            // update state
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos]
                }
            })
            // todos: maintain old todos, and add in new todo from DB
            // input Values: reset back to empty strings
            // update state
            //      todos: maintain old todos, and add in new todo from DB
            //      input Values: reset back to empty strings
        }).catch(error => console.log(error))
    }
    handleDelete = (_id) => {
        //DELETE
        // axios.delete a specific Todo via it's ID
        axios.delete(`https://api.vschool.io/kunzler/todo/${_id}`).then(response => {
            this.setState(prevState => {
                return {

                    // Take the previous array of todos, and only return todos that don't have the _id of the deleted one
                    todos: prevState.todos.filter(todo => todo._id !== _id)
                }
            })
        }).catch(error => console.log(error))
    }
    handleEdit = (_id, updates) => {
        axios.put(`{https://api.vschool.io/kunzler/todo/${_id}`, updates).then(response => {
            this.setState(prevState => {
                return {
                    todos: prevState.todos.map(todo => todo._id === _id ? response.data : todo) 
                }
            })
        }).catch(error => console.log(error))
    }
    
    render() {
        return (
            <TodoContext.Provider
                value={{
                    todos: this.state.todos,
                    getTodos: this.getTodos,
                    addTodo: this.addTodo,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}
            >
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}

export const withTodos = C => props => (
    <TodoContext.Consumer>
        {value => <C {...props}{...value}/>}
    </TodoContext.Consumer>
)
    
export default TodoProvider