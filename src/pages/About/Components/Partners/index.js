import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    background: rgb(242,235,191);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(250,249,241,1) 35%, rgba(242,235,191,1) 100%); 
    text-align: center;
    justify-content: center;
    display: block;
    li {
        list-style-type: none;
        font-size: x-large;
    }
`
const partnerData = [
    {
        name: "Avenue of Life",
        website: "https://www.avenueoflife.org/"
    },
    {
        name: "Free Hot Soup",
        website: "https://www.facebook.com/groups/FreeHotSoupKC"
    },
    {
        name: "Homeroom Health",
        website: "https://www.homeroomhealth.org/"
    },
    {
        name: "Pride Haven",
        website: "https://saveinckc.org/pridehaven/"
    },
    {
        name: "Kansas City Heroes",
        website: "https://kc-heroes.org/"
    }
]
const Partners = () => {
    return (
        <Section className="card mb-5">
            <div className="card-body">
                <h2>Community Partner Organizations</h2>
                <div className="row">
                    <p className="col">We are so inspired and moved by our community partners who help us help those most struggling in KC. You can learn more about our partners at their websites linked below. If you have a charitable organization and would like to become a No Shame! partner, please <a href="/contact">contact us</a>.
                </p>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 partner">
                        <ul>
                            {partnerData.map(partnerData =>
                                <li><a href={partnerData.website}>{partnerData.name}</a></li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </Section>
    )
}
export default Partners