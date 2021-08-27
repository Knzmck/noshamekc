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
    background: #FFBF00;
    border: none;
    color: whitesmoke;
    text-align: center;
    font-size: x-large;
    padding: 10px;
    cursor: pointer;
    margin: 5px;
    box-shadow: 2px 2px 2px 2px;
  }
  .btn:hover {
    color: white;
  }
  a {
    color: red;
  }
  a:hover{
    text-decoration:none;
    color: whitesmoke;
  }
  .link:hover {
    color: black;
  }
  .card {
    background-color:  #fa957ee0;
    color: white;
  }
`
const GetInvolved = () => {
    return (
        <Div className="container mt-4 mb-5">
            <GetInvolvedComponent />
        </Div>
    )
}

export default GetInvolved;