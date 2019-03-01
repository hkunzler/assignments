import React, { Component } from 'react'
import axios from 'axios'
import TodoList from './components/TodoList.js'
import AddTodoForm from './components/AddTodoForm.js'
import {withTodos} from './context/TodoProvider.js'

// GET - Map out todos
//      TodoList - list out todos
//      Todo - singular todo that is mapped out in TodoList component
// App -
//      componentDidMount
//      add place for todos in state
//      componentWillUnmount
//          window.eventlisteners
//          setInterval, setTimeout
// POST - ADD NEW TODO
//      Components
//          <AddTodoForm/>
//          state properties from input values
//          handleChange, handleSubmit
// 
class App extends Component{
    constructor() {
        super()
        this.state = {
            // todos: [],
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }

    componentDidMount() {
        this.props.getTodos()
    }

    // getTodos = () => {
    //     axios.get("https://api.vschool.io/kunzler/todo/").then(response => {
    //         // resolve
    //         this.setState({
    //             todos: response.data
    //         })
    //     }) // reject
    //         .catch(error => console.log(error))
    // }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        // [e.target.name]: e.target.value
        })
}
    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: '',
                description: '',
                price: '',
                imgUrl: ''
        })
        
    }
    // handleDelete = (_id) => {
    //     //DELETE
    //     // axios.delete a specific Todo via it's ID
    //     axios.delete(`https://api.vschool.io/kunzler/todo/${_id}`).then(response => {
    //         this.setState(prevState => {
    //             return {

    //                 // Take the previous array of todos, and only return todos that don't have the _id of the deleted one
    //                 todos: prevState.todos.filter(todo => todo._id !== _id)
    //             }
    //         })
    //     }).catch(error => console.log(error))
    // }

    render() {
        // const {handleChange, handleSubmit, handleDelete, state: {title, description, imgUrl, price, todos}} = this
        // console.log(this.state);
        return (
            <div>
                <AddTodoForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    description={this.state.description}
                    price={this.state.price}
                    imgUrl={this.state.imgUrl}
                    // price={this.price}
                    // imgUrl={this.imgUrl}
                />
                <TodoList
                    todos={this.props.todos}
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}
                />
                
            </div>
        )
    }
}

export default withTodos(App)