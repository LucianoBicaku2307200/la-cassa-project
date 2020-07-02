import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <Carousel.Item>
                <Carousel.Caption>
                    <h1>Custemer reviwes</h1>
                    <p>
                        He share of first to worse. Weddings and any opinions
                        suitable smallest nay. My he houses or months settle
                        remove ladies appear. Engrossed suffering supposing
                        he recommend do eagerness. Commanded no of depending
                        extremity rec
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h1>Custemer reviwes</h1>
                    <p>
                        He share of first to worse. Weddings and any opinions
                        suitable smallest nay. My he houses or months settle
                        remove ladies appear. Engrossed suffering supposing
                        he recommend do eagerness. Commanded no of depending
                        extremity rec
                        </p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h1>Custemer reviwes</h1>
                    <p>
                        He share of first to worse. Weddings and any opinions
                        suitable smallest nay. My he houses or months settle
                        remove ladies appear. Engrossed suffering supposing
                        he recommend do eagerness. Commanded no of depending
                        extremity rec
                        </p>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
