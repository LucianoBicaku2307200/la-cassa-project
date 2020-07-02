import React, { useRef, useEffect } from 'react'
import img1 from '../../assets/imgs/img1.jpg';
import img2 from '../../assets/imgs/img2.jpg';
import img3 from '../../assets/imgs/img3.jpg';
import img1Review from '../../assets/imgs/img1Review.jpg';
import img2Review from '../../assets/imgs/img2Review.jpg';
import Carousel from './Carousel'
import { TweenMax, Elastic, gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function AboutUs() {

    let start = useRef(null);
    let info = useRef(null);
    let img_1 = useRef(null);
    let img_2 = useRef(null);
    let img_3 = useRef(null);
    let lg_img = useRef(null);
    let Personel_review = useRef(null);
    let Custemer_reviews = useRef(null);

    let img_4 = useRef(null);
    let img_5 = useRef(null);

    function animateInfo(elem, del) {
        TweenMax.from(elem, 2, {
            paused: true,
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top center",
                end: '+=50vh',
            },
            opacity: 0,
            x: '-10vw',
            ease: Elastic.easeInOut.config(1, 0.5),
        })
    }

    function animateReviews(elem) {
        TweenMax.from(elem, {
            paused: true,
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "50vh 100vh",
                end: '+=50vh',
            },
            duration: 1,
            opacity: 0,
            x: '-10vw',
            ease: Power3.easeInOut,
        })
    }



    useEffect(() => {
        animateInfo(info.children[0], 0);
        animateInfo(info.children[1], 0.2);
        animateInfo(info.children[2], 0);
        TweenMax.from(lg_img, 2, {
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top center",
                end: '+=50vh top',
            },
            delay: .1,
            display: 'none',
            opacity: 0,
            x: 100,
            ease: Power3.easeInOut,
        });
        TweenMax.from(img_1, 2, {
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top center",
                end: '+=500 center',
            },
            delay: .1,
            opacity: 0,
            display: 'none',
            y: -100,
            ease: Power3.easeInOut,
        })
        TweenMax.from(img_2, 2, {
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top center",
                end: '+=500 center',
            },
            delay: .1,
            opacity: 0,
            display: 'none',
            y: -100,
            ease: Power3.easeInOut,
        })
        TweenMax.from(img_3, 2, {
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "top center",
                end: '+=500 center',
            },
            opacity: 0,
            display: 'none',
            y: -100,
            ease: Power3.easeInOut,
        })
        animateReviews(Personel_review);
        animateReviews(Custemer_reviews);
        TweenMax.from(img_4, {
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "220 ",
                end: '+=240vh',
            },
            delay: .1,
            opacity: 0,
            x: 100,
            ease: Power3.easeInOut,
        });
        TweenMax.from(img_5, {
            scrollTrigger: {
                trigger: start,
                toggleActions: 'restart none none none',
                start: "240 ",
                end: '+=260vh',
            },
            delay: .1,
            opacity: 0,
            x: 100,
            ease: Power3.easeInOut,
        });
    }, [])

    return (
        <div id="aboutus" ref={el => { start = el }}>
            <div className="AboutUs-info">
                <div className="AboutUs-info-content">
                    <div className="AboutUs-info-content-text" ref={el => { info = el }}>
                        <h1 >Who are we</h1>
                        <hr />
                        <p>
                            He share of first to worse. Weddings and any
                            opinions suitable smallest nay. My he houses
                            or months settle remove ladies appear. Engrossed
                            suffering supposing he recommend do eagerness.
                            Commanded no of depending extremity rec
                    </p>
                    </div>

                    <div className="AboutUs-info-content-imgs">
                        <img src={img1} alt="img1" ref={el => { img_1 = el }} />
                        <img src={img2} alt="img1" ref={el => { img_2 = el }} />
                        <img src={img3} alt="img1" ref={el => { img_3 = el }} />
                    </div>
                </div>
                <div className="AboutUs-info-background" ref={el => { lg_img = el }}>

                </div>
            </div>
            <div className="AboutUs-review">
                <div className='AboutUs-review-content'>
                    <img alt='img1' src={img1Review} id='img1-reviews' ref={el => { img_4 = el }} />
                    <div className="personel-review" ref={el => { Personel_review = el }}>
                        <h1>Ower Personel</h1>
                        <hr id='hr1' />
                        <p>
                            He share of first to worse. Weddings and any
                            opinions suitable smallest nay. My he houses
                            or months settle remove ladies appear. Engrossed
                            suffering supposing he recommend do eagerness.
                            Commanded no of depending extremity rec He share
                            of first to worse.
                    </p>
                        <hr id='hr2' />

                    </div>
                    <div className="costumers-reviews" ref={el => { Custemer_reviews = el }}>
                        <Carousel />
                    </div>

                    <img alt='img2' src={img2Review} id='img2-reviews' ref={el => { img_5 = el }} />
                </div>

            </div>
        </div>
    )
}
