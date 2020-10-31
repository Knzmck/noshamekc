import React from "react";
import styled from 'styled-components';
const Div = styled.div`
h1 {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'Slabo', serif;
    font-size: 50px;
}
.jumbotron {
    background-color: rgba(242,235,191,1);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(242,235,191,1) 35%, rgba(242,235,191,1) 100%); 
    height: 100px;
    opacity: 90%;
    padding-top: 30px;
}
`
const Header = () => {
    return (
        <Div>
            <h1 className="jumbotron">Get Involved</h1>
        </Div>
    )
}
export default Header;