import React from 'react';
import Mission from './Components/Mission/index';
import Nic from './Components/Nic/index';
import styled from 'styled-components';

const Div = styled.div`
p{
font-family: 'Slabo', serif;
font-size: x-large;
}
h1, h2{
    font-family: 'Slabo', serif;
}
h1 {
    font-weight: bold;
}`


const About = () => {
    return (
        <Div className="container">
            <Mission />
            <Nic />
        </Div>
    )
}
export default About;