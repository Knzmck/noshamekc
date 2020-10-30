import React from 'react';
import GetInvolvedComponent from './Components/GetInvolvedComponent/index';
import Header from './Components/Header/index'
import styled from 'styled-components';

const Div = styled.div`
img {
height: 310px;
}
.card-body {
    display: flex;
    justify-content: center;
}
.link {
    color: white;
}
.btn {
    background-color: #F06060;
    font-size: x-large;
}
.card-text {
    font-size: large;
    text-align: center;
}
`
const GetInvolved = () => {
    return (
        <Div className="container mt-4 mb-5"> 
                <Header /> 
                <GetInvolvedComponent />
        </Div>
    )
}

export default GetInvolved;