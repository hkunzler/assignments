import React from 'react'
import './style.css'
import myImg from './resources/parrots.jpeg'
import List from './List';
import NameCard from './NameCard'

function App() {
    const obj = {
        color:"blue"
    }
    const styles = {
        color1: "blue",
        color2: "green"
    }
    return (
        <div>
            {/* <NameCard style="color1" name='Rick' age={70} myObj={obj}/>
            <NameCard style="color2" name='Morty' age ={13} myObj={obj}/> */}
            <NameCard style={styles.color1} name='Rick' age={70} myObj={obj}/>
            <NameCard  style={styles.color2} name='Morty' age ={13} myObj={obj}/>
             <div className='container'>
                <h1>My List</h1>
                <List />
        </div>
            <img className="image" src={myImg} alt=""/>
        </div>
    )
}

export default App