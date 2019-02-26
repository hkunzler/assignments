import React from 'react'

class DiceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            die1: 6,
            die2: 6,
            die3: 6,
            die4: 6, 
            die5: 6
        };
    }

    handleDie= () => {
        this.setState({
            die1: Math.floor(Math.random() * 6) + 1,
            die2: Math.floor(Math.random() * 6) + 1,
            die3: Math.floor(Math.random() * 6) + 1,
            die4: Math.floor(Math.random() * 6) + 1,
            die5: Math.floor(Math.random() * 6) + 1,
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.die1}</h1>
                <h1>{this.state.die2}</h1>
                <h1>{this.state.die3}</h1>
                <h1>{this.state.die4}</h1>
                <h1>{this.state.die5}</h1>
                <div className="buttons">
                    <button onClick={this.handleDie}>Roll Dice</button>
                </div>
            </div>
        )
    }
}

export default DiceBox