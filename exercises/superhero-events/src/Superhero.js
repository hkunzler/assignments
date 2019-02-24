import React from 'react'

const Superhero = (props) => {
    return(
                < div style = {
                    {
                backgroundImage: `url(${props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 850
                        }} >
                <h1>{props.name}</h1>
                <p>{props.catchphrase}</p>
        </div>
    )
}

export default Superhero