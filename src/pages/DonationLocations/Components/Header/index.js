import React from 'react';
import styled from 'styled-components';
import BinMessage from '../BinMessage/index';

const Div = styled.div`
p {
    font-size: large;
}
.jumbotron{
    background: rgb(242,235,191);
    background: linear-gradient(90deg, rgba(242,235,191,1) 0%, rgba(250,249,241,1) 35%, rgba(242,235,191,1) 100%); 
    padding-top: 25px;
    padding-bottom: 15px;
}
`

const Header = () => {
    return (
        <Div className="container">
            <div class="jumbotron mb-1 mt-4 text-center">
                 <BinMessage />
                 <p className="mt-2">**If you do not see your donation item on this list, please <a href="/contact">contact us</a>**</p>
            </div>
        </Div>

    )
}
export default Header;