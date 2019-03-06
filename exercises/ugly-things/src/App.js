import React, { Component } from 'react'
import UglyList from './components/UglyList.js'
import AddUglyForm from './components/AddUglyForm.js'
import { withUglies } from './context/UglyProvider.js'
import './style.css'

class App extends Component{
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: ''
        }
    }
    componentDidMount() {
       this.props.getUglies()
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addUgly(this.state)
        this.setState({
            title: '',
            description: '',
            imgUrl: ''
        })
    }
    render() {
        return (
            <div>
                <h1 style={{ fontSize: 100, textAlign: 'center' }}>Ugly Things</h1>
                <div className='two-grid'>
                    <AddUglyForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    description={this.state.description}
                    imgUrl={this.state.imgUrl}
                    buttonText={"Add Ugly Thing"}
                />
                <UglyList 
                    uglies={this.props.uglies}
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}
                    />
                    </div>
                
            </div>
        )
    }
}

export default withUglies(App)