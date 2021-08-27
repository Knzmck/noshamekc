import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Figure = styled.figure `
.btn{
    font-family: 'Slabo', serif;
    font-size: x-large;
    background-color: #b056bb;
    color: white;
}
.link {
    color: white;
    font-family: 'Slabo', serif;
    font-size: x-large;
    font-weight: 200 !important;
}
.link:hover {
    text-decoration: none;
}
`
const DonateBtn = () => {
    return (
        <Figure>
            <button className="btn" alt="donation location and information button"><i className="fas fa-hand-holding-heart"><Link className="link" to="/locations"> Donation Locations & Info</Link></i></button>
        </Figure>
    )
}
export default DonateBtn;