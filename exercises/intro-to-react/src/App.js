import React from 'react'
import Nav from './Nav.js'
import Info from './Info.js'
import Services from './Services.js'
import Gallery from './Gallery.js'
import Footer from './Footer.js'


function App() {
    return (
        <div>
        <div className='flex-container'>
            <Nav />
        </div>
            < Info />
            <Services />
            <Gallery />
            <Footer/>
        </div>
    )
}

export default App
