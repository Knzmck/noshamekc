import React, { useState, useEffect } from 'react';
import Charlies_House from './PartnerPhotos/charlies_house.jpg';
import kc_heroes from './PartnerPhotos/kc_heroes.jpg';
import ave_of_life from './PartnerPhotos/ave_of_life.jpg';
import homeroom from './PartnerPhotos/homeroom_health.jpg';
import freehotsoup from './PartnerPhotos/free-hotsoup.jpg';
import pride_haven from './PartnerPhotos/pride_haven.png';
import journey_impact_center from './PartnerPhotos/journey_impact_center.png';
import care_beyond from './PartnerPhotos/care_beyond.jpg';
import shelterkc from './PartnerPhotos/shelterkc.jpg';
import phoenix_family from './PartnerPhotos/phoenix_family.jpg';

const photos = [ave_of_life, freehotsoup,homeroom, pride_haven, kc_heroes, journey_impact_center, care_beyond, shelterkc, phoenix_family, Charlies_House];
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === photos.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {photos.map((backgroundColors, index) => (
                    <img
                        className="slide"
                        key={index}
                        src={ backgroundColors }
                    />
                ))}
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default Slideshow;