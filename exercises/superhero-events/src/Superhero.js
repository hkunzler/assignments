import React from 'react'

class Superhero extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.preventDefault();
        alert(this.props.catchphrase)
    }
    render() {
        return (
            < div onClick={this.handleClick} style={{
                backgroundImage: `url(${this.props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 850
            }} >
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Superhero