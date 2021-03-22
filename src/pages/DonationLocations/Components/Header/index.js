import React from 'react';
import styled from 'styled-components';
import BinMessage from '../BinMessage/index';

const Div = styled.div`
p {
    font-size: large;
    color: white;
}
.jumbotron{
    background-color:  #fa957ee0;
    padding-top: 25px;
    padding-bottom: 15px;
}
a {
    color: red;
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