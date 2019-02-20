import React from 'react'

function Boxes(props) {
    return (
        <div className={props.style}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default Boxes