import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import fire from '../gif/fire.png'
import Headers from './Headers';
const Map = ({ data }) => {


    let LocationMarker = ({ text }) => {
        return (
            <div>
                <img src={text} height="50px" />
            </div>
        )
    }

    return (
        <div>
            <Headers />
            <div style={{ height: '100vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDSRkkuVbBuXpH1gpqIh1k-a3E65QZpu6k' }}
                    defaultCenter={{ lat: 37.0902, lng: 95.7129 }}
                    defaultZoom={8}
                >
                    {
                        data.slice(0, 134).map((item, i) => {
                            return (
                                <LocationMarker
                                    key={i}
                                    lat={item.geometries[0].coordinates[1]}
                                    lng={item.geometries[0].coordinates[0]}
                                    text={fire}
                                />
                            )
                        })
                    }
                </GoogleMapReact >
            </div>
        </div>
    )
}

export default Map
