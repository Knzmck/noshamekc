import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure `
.btn{
    font-size: x-large;
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
const AmazonBtn = () => {
    return (
        <Figure>
            <button className="btn btn-danger"><i class="fab fa-amazon"><a href="https://rb.gy/kukrgo"> Make an Amazon Donation</a></i></button>
        </Figure>
    )
}
export default AmazonBtn;