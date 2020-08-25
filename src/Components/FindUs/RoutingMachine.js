import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

var coords = [];
function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    coords.push(position.coords.latitude);
    coords.push(position.coords.longitude);
}
getLocation();

class Routing extends MapLayer {
    createLeafletElement() {
        const { map } = this.props;

        console.log(coords)
        let leafletElement = L.Routing.control({
            waypoints: [L.latLng(41.3223438, 19.81573963), L.latLng(coords[0], coords[1])]
        }).addTo(map.leafletElement);
        return leafletElement.getPlan();
    }
}
export default withLeaflet(Routing);