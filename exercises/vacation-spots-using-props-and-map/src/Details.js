import React from 'react'
import PropTypes from 'prop-types'

const Details = props => {
    let color;
    if (props.timeToGo === "Winter") {
        color = "lightblue"
    } else if (props.timeToGo === "Spring") {
        color = "lightpink"
    } else if (props.timeToGo === "Fall") {
        color = "darkorange"
    } else if (props.timeToGo === "Summer") {
        color = "darkgreen"
    }
    let priceTag;
    if (props.price < 500) {
        priceTag = "$"
    } else if (props.price < 1000) {
        priceTag = "$$"
    } else if (props.price > 1000) {
        priceTag = "$$$"
    }
    return (
        <div style={{background: color}}>
            <h3>Name: {props.place}</h3>
            <h3>{priceTag}</h3>
            <h3>Price: ${props.price}</h3>
            <h3>Best Season: {props.timeToGo}</h3>
        </div>
    )
}
    Details.propTypes = {
        place: PropTypes.string,
        price: PropTypes.number,
        timeToGo: PropTypes.string
    }
export default Details