import React from 'react'
import PropTypes from 'prop-types'

const CounterControls = props => {
    return (
        <div>
            <button onClick={props.handleIncrement}>+</button>
            <button onClick={props.handleDecrement}>–</button>
            <button onClick={props.handleDivideBy2}>÷ 2</button>
            <button onClick={props.handleMultiplyBy2}>• 2</button>
        </div>
    )
}
    
CounterControls.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired
}
export default CounterControls