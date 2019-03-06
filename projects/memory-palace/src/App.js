import React from 'react';
import './style.css'
// import axios from 'axios'

class App extends React.Component {

    componentDidMount() {
        this.loadMap()
    }

    loadMap = () => { 
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAZWP5LJr8ovJ1FRCijcfomOVmzTpYeQ28&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    render() {
        return (
            <main>
                <div id="map"></div>
            </main>
        );
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default App;