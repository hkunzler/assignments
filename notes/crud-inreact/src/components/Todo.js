import React, {Component} from 'react'
import AddTodoForm from './AddTodoForm.js'
// import AddTodo From from './AddTodoFrom.js'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
            price: props.price
            
        }
    }

    toggler = () => {
        this.setState(prevState =>({
            isToggled: !prevState.isToggled
        }))
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
            // [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            imgUrl: this.state.imgUrl
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()

    }

    render(){
        const { title, description, imgUrl, price, completed, handleDelete, _id} = this.props
        return ( 
            <div>
                {!this.state.isToggled ?
            <div style={{backgroundImage: `url(${imgUrl})`, border: '1px solid black', margin: 5, backgroundSize: 'cover'}}>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <p>Price: {price}</p>
                <input type="checkbox" defaultChecked={completed} />
                <button onClick={() => handleDelete(_id)}>DELETE</button>
                <button onClick={this.toggler}>Edit</button>
                    </div>
                    :
                    <div>
                        <AddTodoForm
                            {...this.state}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <button onClick={this.toggler}>Close</button>
                    </div>
                }
            </div>
        )
    }
}
export default Todo