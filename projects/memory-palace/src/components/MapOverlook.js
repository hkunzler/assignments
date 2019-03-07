import React, { Component } from 'react';

class MapOverlook extends Component {
    constructor() {
        super()
        this.state = {
            sv: ''
        }
    }
    componentDidMount() {
        this.loadMap()
    }

    loadMap = () => { 
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAZWP5LJr8ovJ1FRCijcfomOVmzTpYeQ28&callback=initMap")
        // loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAZWP5LJr8ovJ1FRCijcfomOVmzTpYeQ28&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
        const berkeley = { lat: 37.869085, lng: -122.254775 }
        this.setState ( {
            sv: new window.google.maps.StreetViewService()
        })
        // const panorama = new window.google.maps.StreetViewPanorama(document.getElementById('pano'));
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: berkeley,
            zoom: 8,
            streetViewControl: false
        });
        console.dir(map);
        const mapEl = document.getElementById('map')
        mapEl.addEventListener("click", this.handleClick)
        this.state.sv.getPanorama({ location: berkeley, radius: 50 }, this.processSVData())
        
        // this.handleClick();
    }
    handleClick = (e) => {
        // console.log('test');
            e.preventDefault();
            // alert('click')////
            this.state.sv.getPanorama({location: e.latLng, radius: 50}, this.processSVData())
        }                                                                                              
    handleImageClick = (e) => {
        // e.preventDefault();
        var markerPanoID = this.data.location.pano;
        this.panorama.setPano(markerPanoID);
        this.panorama.setPov({
            heading: 270,
            pitch: 0
        });
        this.panorama.setVisible(true)
    }
    processSVData = ((data, status) => {
                const panorama = new window.google.maps.StreetViewPanorama(document.getElementById('pano'));

        if (status === "OK") {
            var marker = new window.google.maps.Marker({
                position: this.data.loacation.latLng,
                map: this.map,
                title: this.data.location.description
            })
            panorama.setPano(data.location.pano)
            panorama.setPov({
                heading: 270,
                pitch: 0
            })
            panorama.setVisible(true)

            // // handleImageClick = (e) => {
            // //     e.preventDefault();
            // //     var markerPanoID = data.location.pano;
            // //     this.panorama.setPano(markerPanoID);
            // //     this.panorama.setPov({
            // //         heading: 270,
            // //         pitch: 0
            // //     });
            // //     this.panorama.setVisible(true)
            // // }
            marker.addEventListener("click", this.handleImageClick)
            // this.handleImageClick()
        } else {
            console.log("Street View data not found for this location");
        }
    }) 

    render() {
        return (
            <main>
                <div id="map"></div>
                <div id="panorama"></div>

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


export default MapOverlook;


