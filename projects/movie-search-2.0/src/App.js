import React from 'react';
import Nav from './components/Nav'
import Contact from './components/Contact'
import SearchPage from './components/SearchPage'
import Movie from './components/Movie'
import { Switch, Route, withRouter } from 'react-router-dom'
import './style.css'



const App = () => {
        return (
            <div>
                <Nav/>
                <Switch >
                    <Route exact path='/' component={SearchPage} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/movie/:movieId' component={Movie}/>
               </Switch>
            </div>
        );
    }

export default withRouter(App);
