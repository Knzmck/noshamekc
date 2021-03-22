import React from 'react';
import styled from 'styled-components';
import resources from '../../../../assets/covid_resources.pdf'

const Figure = styled.figure`
.btn{
    font-size: x-large;
    background-color: #fa947e;
    color: white;
    font-family: 'Slabo', serif;
}
a {
    color: white;
    font-size: x-large;
    font-weight: 200 important!;
}
`
const CovidBtn = () => {
    return (
        <Figure>
            <button className="btn" alt="Covid-19 Resources Button" onClick={() => window.open(resources)}><i class="fas fa-hands-helping"></i> Covid-19 Community Resources</button>
        </Figure>
    )
}
export default CovidBtn;