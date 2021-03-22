import React from "react";
import styled from 'styled-components';

const Div = styled.div`
p {
    text-align:center;
    font-size: x-large;
    color: white;
    font-family: 'Slabo', serif;
}
.card {
    border-radius: 1%;
    background-color:  #fa957ee0;
}
h1{
    padding-top: 15px;
    font-weight: 400!important;
    color: white;
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