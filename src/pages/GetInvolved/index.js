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
.card-text {
    font-size: large;
    text-align: center;
}
.btn {
    border-radius: 4px;
    background: #fa947e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: x-large;
    padding: 10px;
    cursor: pointer;
    margin: 5px;
    box-shadow: 1px 1px;
  }
  .btn:hover {
    color: white;
  }
  a:hover{
    text-decoration:none;
    color: white;
  }
  .link:hover {
    color: black;
  }
  .card {
    background-color: rgba(242,235,191,1);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(242,235,191,1) 35%, rgba(242,235,191,1) 100%); 
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