import React from 'react'
import Boxes from './Boxes.js'
import './style.css'

function App() {
    return (
        <div className="flex-container">
            <Boxes style="color1" title='Movie' subtitle="Genre" information="Description" />
            <Boxes style="color2" title='Movie' subtitle="Genre" information="Description" />
            <Boxes style="color3" title='Movie' subtitle="Genre" information="Description" />
            <Boxes style="color4" title='Movie' subtitle="Genre" information="Description"/>
            <Boxes style="color5" title='Movie' subtitle="Genre" information="Description"/>
        </div>
    )
}

export default App