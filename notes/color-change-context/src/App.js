import React from 'react'
import { avecTheme } from './context/ThemeProvider.js'
import './style.css'

const App = props => {
    return (
        <div>
            <div className={`home-${props.theme}`}>
                whoopdy Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem accusamus voluptatum vel ratione quam quod quaerat provident inventore porro distinctio doloremque enim, consequatur reprehenderit soluta obcaecati et a. Natus.
        </div>
            <button onClick={props.toggleTheme}>Change Theme to {props.theme === "light"? "dark" : "light"}!</button>
        </div>
    )
}

export default avecTheme(App)