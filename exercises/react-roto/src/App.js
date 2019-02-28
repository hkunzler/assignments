import React from 'react'
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Footer from './Footer.js'

//npm i react-router-dom
import { Switch, Route } from 'react-router-dom'
//withRouter if you want to pass props



const App = () => {
    return (
        <div>
        <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/services' component={Services}/>
            </Switch>
        <Footer/>
        </div>
    )
}

export default App