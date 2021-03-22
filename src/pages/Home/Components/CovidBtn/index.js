import React from 'react';
import styled from 'styled-components';
import resources from '../../../../assets/covid_resources.pdf'

const Figure = styled.figure`
.btn{
    font-size: x-large;
    background-color: #fa947e;
}
a {
    color: white;
    font-family: 'Slabo', serif;
    font-size: x-large;
    font-weight: 200 important!;
}
.fa {
    font-weight: 200 important!;
}
`
const CovidBtn = () => {
    return (
        <Figure>
            <button className="btn" alt="Covid-19 Resources Button" onClick={() => window.open(resources)}><i class="fab fa-amazon"> Covid-19 Community Resources</i></button>
        </Figure>
    )
}
export default CovidBtn;