
import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

import Routing from './RoutingMachine'
export default class SimpleExample extends Component {

    state = {
        lat: 41.32803532,
        lng: 19.81835746,
        zoom: 13,
        isMapInit: false
    };
    saveMap = map => {
        this.map = map;
        this.setState({
            coords: this.props.coords,
            isMapInit: true
        });
    };
    render() {
        const position = [this.state.lat, this.state.lng];
        // console.log(this.props.coords)
        return (
            <div>
                <Map center={position} zoom={this.state.zoom} ref={this.saveMap}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {this.state.isMapInit && <Routing map={this.map} position={this.props.coords} />}
                </Map>
            </div>

        )
    }
}