import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Figure = styled.figure `
.btn{
    font-family: 'Slabo', serif;
    font-size: x-large;
}
.link {
    color: white;
    font-family: 'Slabo', serif;
    font-size: x-large;
}
.link {
    font-weight: 200 !important;
}
`
const DonateBtn = () => {
    return (
        <Figure>
            <button className="btn btn-danger" alt="donation location and information button"><i class="fas fa-hand-holding-heart"><Link class="link" to="/locations"> Donation Locations & Info</Link></i></button>
        </Figure>
    )
}
export default DonateBtn;