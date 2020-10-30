import React from "react";
import Faq from "react-faq-component";
import styled from "styled-components";

const data = {
    rows: [
        {
            title: "Which products do you accept for donation?",
            content: `Our first focus is collecting Tampons, pads, liners, menstrual cups, control pads, new underwear, body wipes and any other period products as well as basic toiletries such as deodorant, body spray, bodywash, soap, shampoo, conditioner, toothbrushes and toothpaste. We will also accept donations for survival gear such as batteries, backpacks, packets of over-the-counter pain relief medications, hand/toe warmers, gloves, hats, blankets, coats and more. There is a huge need for those products as well. See our full list <a href=\'locations'\>here<a>`,
        },
        {
            title: "Where can I drop off my donations?",
            content:
                "At any of our " + "<a href=\'locations'\>donation locations<a>" + ". We are also able to pick up donations as needed- please email us to inquire about donation pickups.",
        },
        {
            title: "Who receives our donations?",
            content: `Every week in Kansas City there are a variety of events hosted by No Shame! and our partners Free Hot Soup and KC Heroes. These events give the volunteers at No Shame! opportunities to connect and get donated products directly to those in need. Like and follow our ` + "<a href='https://www.facebook.com/NoShameInKC/'\>Facebook group<a>" + " for the latest news and events.",
        },
        {
            title: "If I am a person who needs assistance with obtaining period or hygiene products, what should I do?",
            content: "Please " + "<a href=\'contact'\>contact us<a>" + ". We would gladly assist you!"
        }
    ],
};
const Div = styled.div`

.faq-row {
    margin-bottom: 15px;
    padding-bottom: 15px;
    background-color: rgb(249,239,172);
    background-color: linear-gradient(90deg, rgba(249,239,172,1) 0%, rgba(247,245,212,0.9724264705882353) 39%, rgba(242,238,209,1) 100%);
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