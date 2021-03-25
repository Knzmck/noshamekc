import React from 'react';
import BinPic2 from '../../../../assets/bin.jpg';
import styled from 'styled-components';
import ItemList from '../ItemList/index';

const Div = styled.div`
img {
height: 250px;
width: 160px;
}
h1, figcaption, p {
    color: white;
}
`
const BinMessage = () => {
    return (
        <Div >
            <section className="row">
                <figure className="col-md-3">
                    <img alt="Pink Donation Bin" className="mt-5" src={BinPic2}></img>
                    <figcaption>Look for the pink bins at our donation locations!</figcaption>
                </figure>
                <section className="col-md-8 mt-2">
                <h1>Donation Information</h1>
                    <p>We are so grateful for all the donations we receive from individuals, businesses and the businesses listed below who host our donation locations!
                    If you are a business interested in hosting a donation location or you have donation-related ideas or questions please contact us. We would love to hear from you <i className="fa fa-heart"></i>
                    </p>
                    <ItemList />
                </section>
            </section>
        </Div>
    )
}
export default BinMessage;