import React from 'react'

function NameCard(props) {
    return (
        // className={props.style} => instead of style in div
<div style={{backgroundColor: props.style}}>
            <h1>Hi my name is {props.name}, and I am {props.age} years old</h1>
            <p>My favorite color is {props.myObj.color}</p>
        </div>
    )
}

export default NameCard