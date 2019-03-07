import React from 'react';
import './style.css'
import MapOverlook from './components/MapOverlook';
// import axios from 'axios'

class App extends React.Component {

    

    render() {
        return (
            <main>
                {/* <MapStreetView/>  */}
                <MapOverlook />
                {/* <StreetView address="Times Square" APIkey="AIzaSyAZWP5LJr8ovJ1FRCijcfomOVmzTpYeQ28" streetView zoomLevel={15}/> */}
            </main>
        );
    }
}


export default App;