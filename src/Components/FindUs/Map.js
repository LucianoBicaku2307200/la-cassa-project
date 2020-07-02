import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
export default function MapComponent() {
    const position = [41.3223438, 19.81573963];
    return (

        <div>

            <Map center={position} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={position}
                />

            </Map>
        </div >
    )
}
