import React from "react";
import styled from 'styled-components';
const Div = styled.div`
h1 {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'Slabo 27px', serif;
    font-size: 50px;
}
`
const Header = () => {
    return (
        <Div>
            <h1 className="mt-5 mb-5">Get Involved</h1>
        </Div>
    )
}
export default Header;