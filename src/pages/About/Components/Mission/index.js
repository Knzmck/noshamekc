import React from "react";
import styled from 'styled-components';

const Div = styled.div`
.ourmission {
    display: flex;
    justify-content: center;
}
p {
    text-align:center;
    font-size: x-large;
    color: black;
}
.card {
    border-radius: 1%;
    margin-top: 20px;
}
`

const Mission = () => {
    return (
        <Div>
            <section className="card">
            <h1 className="ourmission">- Our Mission -</h1>
            
                <div className="card-body">
                    <p> No Shame! is a grassroots organization & our mission is to provide our houseless community with judgement free access to period products and any other additional healthcare and hygiene related resources that may help improve the community’s overall quality of life and health. </p>
                </div>
            </section>
        </Div>

    )
}
export default Mission;