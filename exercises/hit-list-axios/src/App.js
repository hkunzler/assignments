import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            peopleOnHitList: []
        }
    }
    componentDidMount() {
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
            this.setState({
                peopleOnHitList: response.data
            })
        }).catch(error => console.log(error))
    }
    render() {
        const mappedPeopleOnHitList = this.state.peopleOnHitList.map((item) => {
            return (
                <div  >
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent:'center',  backgroundImage: `url(${item.image})`, height: 300, backgroundSize: 'cover', margin: 50, backgroundPosition: 'center' }}>
                    <h3 className='item-title'>{item.name}</h3>
                </div>
                </div>
            )
        })
        return (
            <div>
                <h1 className='title'>Don Corleone's Hit List</h1>
                <div className='grid-container'>
                    {mappedPeopleOnHitList}
                    </div>
            </div>
        );
    }
}

export default App;