import React from "react";
import styled from 'styled-components';
const Div = styled.div`
h1 {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
}
`
const Header = () => {
    return (
        <Div>
            <h1 className="mb-4">Get Involved</h1>
        </Div>
    )
}
export default Header;