import React from "react";
import styled from 'styled-components';

const Div = styled.div`
p {
    text-align:center;
    font-size: x-large;
    color: black;
    font-family: 'Slabo', serif;
}
.card {
    border-radius: 1%;
    background: rgb(249,239,172);
background: linear-gradient(90deg, rgba(249,239,172,1) 0%, rgba(247,245,212,0.9724264705882353) 39%, rgba(242,238,209,1) 100%);
}
.card-body {
    background: rgb(249,239,172);
background: linear-gradient(90deg, rgba(249,239,172,1) 0%, rgba(247,245,212,0.9724264705882353) 39%, rgba(242,238,209,1) 100%);
}
h1{
    padding-top: 15px;
    font-weight: 400!important;
}
`

const Mission = () => {
    return (
        <Div>
            <section className="card mt-4">
                <h1 className="text-center display-4">About Our Mission</h1>
                <div className="card-body">
                    <p> No Shame! is a grassroots organization & our mission is to provide our houseless community with judgement free access to period products and any other additional healthcare and hygiene related resources that may help improve the community’s overall quality of life and health. </p>
                </div>
            </section>
        </Div>

    )
}
export default Mission;