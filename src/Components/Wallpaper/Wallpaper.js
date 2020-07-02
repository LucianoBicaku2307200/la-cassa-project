import React, { useContext, useEffect, useRef } from 'react'
import { ToggleMenuContex } from "../../assets/context/ToggleMenuContex"
import ScrollTo from "react-scroll-into-view";
import { TweenMax, Back } from 'gsap'

export default function Wallpaper() {
    const { toggle } = useContext(ToggleMenuContex);
    const [showComponent] = toggle

    let title = useRef(null)
    let info = useRef(null)
    let scroll = useRef(null)

    useEffect(() => {
        TweenMax.from(
            title,
            1,
            {
                opacity: 0,
                y: -80,
                ease: Back.easeInOut,
            }
        )
        TweenMax.from(
            info,
            1,
            {
                delay: .4,
                opacity: 0,
                y: -80,
                ease: Back.easeInOut,
            }
        )
        TweenMax.from(
            scroll,
            1,
            {
                delay: .4,
                opacity: 0,
                y: -80,
                ease: Back.easeInOut,
            }
        )

    }, [])

    return (
        <>
            <div className="wallpaper-background">
                {!showComponent ?
                    <>
                        <div className="title-border" ref={elem => title = elem}>
                            <h1>La<br />Cassa</h1>
                        </div>
                        <div ref={elem => info = elem}>
                            <p className='add-margin-top'>Adress: Rruga Endri Keko afer Pro-Farmes</p>
                            <p>Nr Telefoni: 355-68-8030-642</p>
                            <p>Email: lucianobicaku2307@gmial.com</p>
                            <p className='add-margin-top'>Opened: 8:00 am - 12 pm</p>
                        </div>

                    </> : <></>
                }
            </div >
            <ScrollTo selector={`#aboutus`}>
                <button className="ctn-icon" ref={elem => { scroll = elem }}>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </button>
            </ScrollTo>
        </>
    )
}
