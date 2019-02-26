import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            favMovie: "",
            favActor: "",
            isRotten: false,
            gender: "",
            favCity: "",
            actorCollection: []
        }
    }
    handleChange = e => {
        // const target = e.target
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()

        const actorObj = {
            favMovie: this.state.favMovie,
            favActor: this.state.favActor,
            isRotten: this.state.isRotten,
            gender: this.state.gender,
            favCity: this.state.favCity
        }

        alert(this.state.favMovie)
        alert(this.state.favActor)
        this.setState(prevState => {
            return{
            actorCollection: [...prevState.actorCollection, actorObj],
            favMovie: "",
            favActor: "",
            isRotten: false,
            gender: "",
            favCity: ""}
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="favMovie"
                        value={this.state.favMovie}
                        onChange={this.handleChange}
                        placeholder="Favorite Movie"
                    />
                    <input
                        type="text"
                        name="favActor"
                        value={this.state.favActor}
                        onChange={this.handleChange}
                        placeholder="Favorite Actor"
                    />
                    Is it Rotten?
                    <input
                        type="checkbox"
                        name='isRotten'
                        onChange={this.handleChange}
                        checked={this.state.isRotten} />
                    Male
                    <input
                        type="radio" 
                        gender="gender"
                        value="Male"
                        onChange={this.handleChange}
                    />
                    Female
                    <input
                        type="radio" 
                        gender="gender"
                        value="Female"
                        onChange={this.handleChange} />
                    Other
                    <input
                        type="radio"
                        gender="gender"
                        value="Other"
                        onCHange={this.handleChange} />
                    <select name="favCity" onChange={this.handleChange}>
                        <option value="">Choose Your Fav. City</option>
                        <option value="Paris">Paris</option>
                        <option value="Amsterdan">Amsterdan</option>
                        <option value="Reykajavik">Reykajavik</option>
                        <option value="Cape Town">Cape Town</option>
                    </select>
                    <button>Submit</button>
                </form>
                <div>
                    {this.state.actorCollection.map((item, i) => {
                        return (
                            <div>
                                <h1>Movie: {item.favMovie}</h1>
                                <h3>Actor: {item.favActor}</h3>
                                <p>Is Rotten?{item.isRotten.toString()}</p>
                                <p>Fav City: {item.favCity}</p>
                                <p>Gender: {item.gender}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App