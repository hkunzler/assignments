import React from 'react'

// A function that returns JSX
const Display = props => {
    // if (props.greeting === "Hello") {
    //     return <h1>The Greeting is Hello!</h1>
    // } else if (props.greeting === "Goodbye") {
    //     return <h1>The Greeting is Goodbye!</h1>
    // }

    return (
        <div>
            {
                props.greeting === "Hello"
                    ? < h1 > The Greeting is Hello! </h1>
                    : <h1>The Greeting is Goodbye!</h1 >
            }
        </div>
    )
}

export default Display