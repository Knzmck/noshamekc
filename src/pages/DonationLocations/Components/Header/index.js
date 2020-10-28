import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
p {
    font-size: large;
}
.jumbotron{
    background: rgb(242,235,191);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(250,249,241,1) 35%, rgba(242,235,191,1) 100%); 
}

`

const Header = () => {
    return (
        <Div className="container">
            <div class="jumbotron text-center mt-4">
            <h1>Donation Locations</h1>
            <p>We are so grateful for the following businesses for hosting donation boxes for hygiene and menstrual products!
            If you are a business interested in hosting a donation location please contact us. We would love to hear from you <i className="fa fa-heart"></i>
            </p>
            </div>
        </Div>

    )
}
export default Header;