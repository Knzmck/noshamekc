import React from 'react';
import VolunteerImg from '../../../../assets/volunteer.jpg';
import Products from '../../../../assets/bin.jpg'
import StuffImg from '../../../../assets/stuff.jpg';
import { Link } from 'react-router-dom';

const cardInfo = [
    {
        title: "Donation Locations",
        img: Products,
        alt: "Pads, Over-The-Counter Medications, Tampons",
        desc: "We are always accepting donations big or small at our many donation locations. Look for the pink bins at!",
        btnName: "Donation Locations",
        btnLink: "/locations"
    },
    {
        title: "Volunteer Opportunities",
        img: VolunteerImg,
        alt: "People volunteering at the Park in Kansas City for No Shame",
        desc: "Interested in volunteering? Want to become a No Shame! partner or donation location? Contact us for more information!",
        btnName: "Connect With Us",
        btnLink: "/contact"
    }
]
const Connect = () => {
    return (
        <div class="card-deck">
            {cardInfo.map(cardInfo =>
                <div className="card">
                    <img className="card-img-top img" src={cardInfo.img} alt={cardInfo.alt}></img>
                    <button className="btn"><Link class="link" to={cardInfo.btnLink}>{cardInfo.btnName}</Link></button>
                    <div className="card-body">
                        <p className="card-text">
                            {cardInfo.desc}</p>
                    </div>
                </div>
            )}
            <div className="card">
                <img className="card-img-top img" src={StuffImg} alt="menstrual and hygiene Products"></img>
                <button className="btn btn-info" onClick={() => window.open("https://rb.gy/kukrgo")}>Amazon Wishlist</button>
                <div className="card-body">
                    <p className="card-text">
                    Can't make it in person to donate or volunteer? Check out our <a href="https://rb.gy/kukrgo">amazon wishlist</a>!</p>
                </div>
            </div>

        </div>

    )
}
export default Connect; 