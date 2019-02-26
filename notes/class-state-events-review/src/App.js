import React from 'react'
import Box from './Box.js'

// Statefil and Stateless
//  Class     Functional(Display)
//  State
// Lifecycle Methods

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color1: "blue",
            color2: "green",
            color3: "blue",
            count: 0
        }
    }

    handleChangeColor = () => {
        const colors = ["green", "purple", "teal", "cornflowerblue", "firebrickred"]
        //Generate 3 different colors //        
        // 1 of 5 random colors
        const chosenColor1 = colors[Math.floor(Math.random() * colors.length)]
        const chosenColor2 = colors[Math.floor(Math.random() * colors.length)]
        const chosenColor3 = colors[Math.floor(Math.random() * colors.length)]
        //set state to have that new color
        this.setState(prevState => {
            return{
            color1: chosenColor1,
            color2: chosenColor2,
            color3: chosenColor3,
            count: prevState.count + 1
            }
        })
    }
    // handleClick = () => {
    //     alert("Hello")
    // }

    render() {
        return (
            <div>
                <Box count={this.state.count} color={this.state.color1} handleChangeColor={this.handleChangeColor} />
                <Box count={this.state.count} color={this.state.color2} handleChangeColor={this.handleChangeColor} />
                <Box count={this.state.count} color={this.state.color3} handleChangeColor={this.handleChangeColor} />
            </div>
        )
    }
}

// const App = () => {
// return (
//     <div>
//         <h1>Review</h1>
//         <ul>
//             <li>Classes</li>
//             <li>Event Listeners</li>
//             <li>State</li>
//         </ul>
//         <h3>Lessons Today</h3>
//         <ol>
//             <li>Forms in React</li>
//             <li>Container Components</li>
//         </ol>
//     </div>
// )
// }

export default App