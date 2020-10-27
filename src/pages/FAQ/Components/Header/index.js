import React from "react";
import styled from 'styled-components';
const Div = styled.div`
h1 {
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
}
`
const Header = () => {
    return (
        <Div>
            <h1>- Frequently Asked Questions -</h1>
        </Div>
    )
}
export default Header;