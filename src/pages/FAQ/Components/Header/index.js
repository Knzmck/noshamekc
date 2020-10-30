import React from "react";
import styled from 'styled-components';
const Div = styled.div`
h1 {
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
    font-family: 'Slabo', serif;
}
.jumbotron {
    background: rgb(242,235,191);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(242,235,191,1) 35%, rgba(242,235,191,1) 100%); 
    padding-top: 30px;
    padding-bottom: 25px;
}
`
const Header = () => {
    return (
        <Div className="container">
            <h1 className="jumbotron text-center">Frequently Asked Questions</h1>
        </Div>
    )
}
export default Header;