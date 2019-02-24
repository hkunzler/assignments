import React from 'react'

const Buttons = props => {
    return (
        <div>
            <button onClick={props.handleChangeColor}>Black and White</button>
            <button onClick={props.handleChangeColorPurple}>Black and White with Purple</button>
            <button onClick={props.handleChangeColorBlue1}>Blue Top</button>
            <button onClick={props.handleChangeColorBlue2}>Blue Bottom</button>
            <button onClick={props.handleChangeColor1}>Top Left</button>
            <button onClick={props.handleChangeColor2}>Top Right</button>
            <button onClick={props.handleChangeColor3}>Bottom Left</button>
            <button onClick={props.handleChangeColor4}>Bottom Righ</button>
        </div>
    )
}

export default Buttons