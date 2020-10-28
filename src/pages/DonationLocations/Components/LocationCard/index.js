import React from 'react';
import LostE from '../../assets/lostevenings.jpg';
import bigrip from '../../assets/bigrip.PNG';
import hoy from '../../assets/hoy.PNG';
import Midtownkava from '../../assets/midtown kava.jpg';
import smalter from '../../assets/smalter.PNG';
import soa from '../../assets/soa.jpg';
import styled from 'styled-components';

const locations = [
    {
        name: "Lost Evenings Brewing Company",
        address: "8625 Hauser Ct, Lenexa, KS 66215",
        hours1: "M-W: CLOSED, Th-Sat: Noon - 9PM, Sunday: Noon - 8PM",
        weblink: "https://www.losteveningsbrewingcompany.com/",
        picture: LostE,
        alt: "Lost Evenings Brewing Company"
    },
    {
        name: "The Big Rip Brewing Company",
        address: "216 E 9th Ave, North Kansas City, MO 64116",
        hours1: "M-Th: 4PM - 9PM, F-S: 12PM - 1AM, Su 12:30 - 5:30PM",
        weblink: "http://bigripbrewing.com/",
        picture: bigrip,
        alt: "The Big Rip Brewing Company"
    },
    {
        name: "Hoy Supply",
        address: "1001 S Broadway, Oak Grove, MO 64075",
        hours1: "M-Th 8AM - 5 PM, F 8AM - 3PM, Sa-Su CLOSED",
        weblink: "https://hoysupply.com/",
        picture: hoy,
        alt: "Hoy Supply"
    },
    {
        name: "Midtown Kava",
        address: "1415 W 39th St # d, Kansas City, MO 64111",
        hours1: "M-S 10AM - 7PM, Su 12PM - 6PM",
        weblink: "http://Midtownkava.com/",
        picture: Midtownkava,
        alt: "Midtown Kava"
    },
    {
        name: "The Smalter Gallery",
        address: "1802 W 39th St, Kansas City, MO 64111",
        hours1: "Su-Thu CLOSED, F-Sa 3PM - 7 PM",
        weblink: "https://smalterart.com/",
        picture: smalter,
        alt: "The Smalter Gallery"
    },
    {
        name: "State of Art Framing",
        address: "1616 W 39th St, Kansas City, MO 64111",
        hours1: "Su-M CLOSED, T-F 10AM - 5:30PM, Sa 10AM - 4PM",
        weblink: "http://sotakc.com/",
        picture: soa,
        alt: "State of Art Framing"
    }

]
const Div = styled.div`
img {
height: 150px;
width: 200px;
}
.card {
    background: rgb(242,235,191);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(250,249,241,1) 35%, rgba(242,235,191,1) 100%);
}
.details {

}
p {
    font-size: large;
}`
const LocationCard = () => {
    return (
        <Div>
            {locations.map(locations =>
                <div class="card">
                    <div class="card-body">  
                        <div className="row">
                            <div className="col-md-4"><img src={locations.picture} alt={locations.alt}></img></div>
                            <div className="col-md-6 details">
                                <h4 class="card-title">{locations.name}</h4>
                                <p class="card-text">{locations.address}</p>
                                <p class="card-text">Hours:</p>
                                <p class="card-text">{locations.hours1}</p>
                                <p class="card-text"><a href={locations.weblink}>{locations.weblink}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Div>
    )
}
export default LocationCard;