import React from "react";
import styled from 'styled-components';
const Div = styled.div`
h1 {
    text-align: center;
    font-family: 'Slabo', serif;
    color: white;
}
.jumbotron {
    background-color:  #fa957ee0;
    padding-top: 15px;
    padding-bottom: 25px;
}
`
const Header = () => {
    return (
        <Div className="container">
            <h1 className="jumbotron text-center display-4 mt-4">Frequently Asked Questions</h1>
        </Div>
    )
}
export default Header;