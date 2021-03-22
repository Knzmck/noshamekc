import React from "react";
import styled from 'styled-components';
const Div = styled.div`
h1 {
    text-align: center;
    font-family: 'Slabo', serif;
}
.jumbotron {
    background-color: rgba(242,235,191,1);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(242,235,191,1) 35%, rgba(242,235,191,1) 100%); 
    opacity: 90%;
    padding-top: 15px;
    padding-bottom: 25px;
}
`
const Header = () => {
    return (
        <Div>
            <h1 className="jumbotron text-center display-4">Get Involved</h1>
        </Div>
    )
}
export default Header;