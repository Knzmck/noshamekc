import React from "react";
import Faq from "react-faq-component";
import styled from "styled-components";

const data = {
    rows: [
        {
            title: "Which products do you accept for donation?",
            content: `Our first focus is collecting tampons, pads, liners, menstrual cups, control pads, new underwear, body wipes and any other period products. We also need basic toiletries such as deodorant, body spray, bodywash, soap, shampoo, conditioner, toothbrushes and toothpaste. We will also accept donations for survival gear (especially as winter approaches) such as batteries, backpacks, packets of over-the-counter pain relief medications, hand/toe warmers, socks, gloves, hats, blankets, coats and more. See our full list <a href=\'locations'\>here<a>`,
        },
        {
            title: "Where can I drop off my donations?",
            content:
                "At any of our " + "<a href=\'locations'\>donation locations<a>" + ". We are also able to pick up donations as needed- please email us to inquire about donation pickups.",
        },
        {
            title: "Who receives our donations?",
            content: `Aside from dispersing your generous donations to the houseless community through events such as Free Hot Soup and houseless picnics, we contribute items to a variety of organizations that serve those most struggling in and around Kansas City: including Homeroom Health, a fully integrated health center that links struggling families & youth to healthcare and resources, and Avenue of Life who have a brand new youth home that serves houseless youth in Wyandotte County. Yes, we take direct requests for assistance from individuals within the community who reach out to us. If you are struggling to get period products, we would love to take that struggle off of your plate. You can reach us ` + "<a href=\'contact'\>here.<a>"
        },
        {
            title: "I am an individual who is in need of assistance with period/hygiene products and/or survival gear. Do you take direct requests?",
            content: "Yes, we take direct requests for assistance from individuals within the community who reach out to us. If you are struggling to get period/hygiene products and/or survival gear, we would love to take that struggle off of your plate. You can reach us " + "<a href=\'contact'\>here.<a>"
        },
        {
            title: "Does No Shame! accept and distribute winter clothing donations?",
            content: "YES. As the cold weather is approaching and during winter months, these types of donations are high priority. Items include but are not limited to: winter clothing donations, hand/toe warmers, candles, batteries, blankets, socks, pants, hats, ect. Please message us if your donation item is not on this list. We will accept these donations year round and save them to distribute in cold weather months."
        },
        {
            title: "How can I volunteer/help?",
            content: "We are 100% a grassroots organization and always need help. You can assist in donating items, donation drives, collecting items, follow and share our social media, help connect us with more donation locations, meet us at the park to help distribute items! "
        }
    ],
};
const Div = styled.div`

.faq-row {
    margin-bottom: 15px;
    padding-bottom: 15px;
    background-color:  #fa957ee0;
}
.faq-row-wrapper { 
    margin-bottom: 50px;
    border-radius: 2%;
    display: block;
    background-color: opaque;
}
.row-title-text {
    justify-content: center; 
    text-align: center; 
    font-family: 'Slabo', serif;
    font-size: x-large !important;
    color: white;
}
.row-content-text {
    padding-top: 15px;
    display: block;
    justify-content: center;  
    text-align: center; 
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-color: red;
    font-family: 'Slabo', serif;
    font-size: large !important;
    color: white !important;
}
a {
    color: red !important;
}
.row-title {
margin-left: 5%;
}
.styles_faq-row-wrapper__3vA1D {
    background-color: transparent;
}
`
const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};
const Card = () => {
    return (
        <Div>
            <Faq data={data} config={config} />
        </Div>
    )
}
export default Card;