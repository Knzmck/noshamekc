import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    .card {
        background-color:  #fa957ee0;
        text-align: center;
        justify-content: left;
        display: block;
    }
    li {
        list-style-type: none;
        font-size: x-large;
    }
    a {
        color: white;
        text-decoration: underline;
    }
    p, h1 {
        color: white;
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
    },
    {
        name: "Journey Impact Center",
        website: "https://www.takethejourney.cc/journey-impact-center/"
    },
    {
        name: "Care Beyond the Boulevard",
        website: "https://carebeyondtheboulevard.org/"
    },
    {
        name: "Shelter KC",
        website: "https://www.shelterkc.org/"
    },
    {
        name:"Phoenix Family",
        website: "http://www.phoenixfamily.org/"
    }
]
const Partners = () => {
    return (
        <Div className="container">
            <div className="card mb-5 mt-4">
                <div className="card-body">
                    <h1 className="display-4">Community Partners</h1>
                    <div className="row">
                        <p className="col">We are so inspired and moved by our community partners who help us help those most struggling in Kansas City. You can learn more about our partners at their websites linked below. If you have a charitable organization and would like to become a No Shame partner, please <a href="/contact">contact us</a>.
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
            </div>
        </Div>
    )
}
export default Partners