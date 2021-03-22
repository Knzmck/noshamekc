import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure `
.btn{
    font-size: x-large;
    background-color: #fa947e;
}
.btn {
    color: white;
    font-family: 'Slabo', serif;
    font-size: x-large;
    font-weight: 200 important!;
}
.fa {
    font-weight: 200 important!;
}
`
const AmazonBtn = () => {
    return (
        <Figure>
            <button className="btn" alt="Amazon Donation Button" onClick={() => window.open("https://rb.gy/kukrgo")}><i class="fab fa-amazon"> Make an Amazon Donation</i></button>
        </Figure>
    )
}
export default AmazonBtn;