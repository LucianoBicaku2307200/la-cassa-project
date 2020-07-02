import React, { useRef, useEffect } from 'react'

import { TweenMax, Elastic, gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function FoodMenu() {

    let start = useRef(null)

    let main_title = useRef(null);
    let sub_title1 = useRef(null);
    let sub_title2 = useRef(null);
    let sub_title3 = useRef(null);
    let sub_title4 = useRef(null);

    let rec_text = useRef(null);
    let rec_imgs = useRef(null);

    function animate(elem, st, en, duration) {
        TweenMax.from(elem, duration, {
            paused: true,
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: st,
                end: en,
                // markers: true,
                // scrub: true
            },
            opacity: 0,
            y: '20vw',
            ease: Power3.easeInOut,
        })
    }

    useEffect(() => {
        animate(main_title, 'top 100', '80vh', 1);
        animate(sub_title1, '120 center', '220vh', 1);
        animate(sub_title2, '120 center', '220vh', 1);
        animate(sub_title3, '120 center', '220vh', 1);
        animate(sub_title4, '120 center', '220vh', 1);
        TweenMax.from(rec_text, 2, {
            paused: true,
            scrollTrigger: {
                trigger: main_title,
                toggleActions: 'restart none none none',
                // start: st,
                // end: en,
                // markers: true,
                // scrub: true
            },
            opacity: 0,
            x: -100,
            ease: Power3.easeInOut,
        })
        TweenMax.from(rec_imgs, 2, {
            paused: true,
            scrollTrigger: {
                trigger: main_title,
                toggleActions: 'restart none none none',
                // start: st,
                // end: en,
                // markers: true,
                // scrub: true
            },
            opacity: 0,
            x: 500,
            ease: Power3.easeInOut,
        })
    }, [])

    return (
        <div className="our-menu" id='menus' ref={el => { start = el }}>
            <h1 ref={el => { main_title = el }}>
                Our Menu
            </h1>
            <div className="menus-homepage">
                <div className="food-menu-item-1">
                    <h2 ref={el => { sub_title1 = el }}>Breakfast</h2>
                </div>
                <div className="food-menu-item-2">
                    <h2 ref={el => { sub_title2 = el }}>Lunch</h2>
                </div>
                <div className="food-menu-item-3">
                    <h2 ref={el => { sub_title3 = el }}>Dinner</h2>
                </div>
                <div className="food-menu-item-4">
                    <h2 ref={el => { sub_title4 = el }}>Drinks</h2>
                </div>
            </div>
            <div className="menus-recommended-homepage" id='recommended' ref={el => { rec_text = el }}>
                <div className="recommended-title">
                    <h1>Recommended</h1>
                    <hr />
                </div>
                <div className="recommended-food" ref={el => { rec_imgs = el }}>
                    <div className="recommended-item background-1" >
                        <p>Dishname</p>
                        <button>Dinner</button>
                    </div>
                    <div className="recommended-item background-2" >
                        <p>Dishname</p>
                        <button>Dinner</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
