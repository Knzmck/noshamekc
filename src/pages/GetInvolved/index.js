import React from 'react';
import GetInvolvedComponent from './Components/GetInvolvedComponent/index';
import Header from './Components/Header/index'
import styled from 'styled-components';

const Div = styled.div`
img {
height: 263px;
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
}
`
const GetInvolved = () => {
    return (
        <Div className="container mt-4"> 
                <Header /> 
                <GetInvolvedComponent />
        </Div>
    )
}

export default GetInvolved;