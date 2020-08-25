import React, { useState, useRef, useEffect } from 'react'
import LeafletMap from './LeafletMap'
import DefaultMap from './Map'
import { TweenMax, gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function FindUs() {
    const [showMap, setShowMap] = useState(false);
    const [Coords, setCoords] = useState({});
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        const userCoords = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
        setCoords(userCoords);
    }
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                setShowMap(false);
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                setShowMap(false);
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                setShowMap(false);
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                setShowMap(false);
                break;
            default:
            //do nothing
        }
    }
    let start = useRef(null);
    let title = useRef(null)
    let info = useRef(null)
    let map = useRef(null)

    useEffect(() => {
        TweenMax.from(title, 2, {
            paused: true,
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top 400",
                end: '100',
                // markers: true,
                // scrub: true
            },
            opacity: 0,
            y: 100,
            ease: Power3.easeInOut,
        })
        TweenMax.from(info, 2, {
            paused: true,
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top 400",
                end: '100',
                // markers: true,
                // scrub: true
            },
            opacity: 0,
            x: -200,
            ease: Power3.easeInOut,
        })
        TweenMax.from(map, 4, {
            paused: true,
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top 400",
                end: '100',
                // markers: true,
                // scrub: true
            },
            opacity: 0,
            x: 500,
            ease: Power3.easeOut,
        })
    }, [])

    return (
        <div className="FindUs" id='findus' ref={el => { start = el }}>
            <h1 ref={el => { title = el }}>Find Us</h1>
            <div className="map-content" ref={el => { info = el }}>
                <div className="map-info">
                    <h2>Address</h2>
                    <p>Adress: Rruga Endri Keko afer Pro-Farmes</p>
                    <p>Nr Telefoni: 355-68-8030-642</p>
                    <p>Email: lucianobicaku2307@gmial.com</p>
                    <p className='add-margin-top'>Opened: 8:00 am - 12 pm</p>
                    <button onClick={() => {
                        setShowMap(true);
                        getLocation()
                    }}>
                        <i className="fas fa-location-arrow"></i> Directions
                        </button>
                </div>
                <div className="map" ref={el => { map = el }}>
                    {showMap ? <LeafletMap coords={Coords} /> : <DefaultMap />}

                </div>
            </div>

        </div>
    )
}
