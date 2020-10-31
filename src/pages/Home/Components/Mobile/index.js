import React from 'react';
import NoShame from '../../../../assets/NoShameMobilet.png';
import DonateBtn from '../DonateBtn/index';
import AmazonBtn from '../AmazonBtn/index';

const Mobile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1"> </div>
                <div className="col-md-10 mt-2"><img className="ns-img" alt="No Shame! A Period Product Project For our Houseless Community" src={NoShame}></img></div>
                <div className="col-md-1"> </div>
            </div>
            <div className="row">
                <div className="col-md-4"> </div>
                <div className="col-md-8"><DonateBtn /></div>
                <div className="col-md-1"> </div>
            </div>
            <div className="row">
                <div className="col-md-4"> </div>
                <div className="col-md-8"><AmazonBtn /></div>
                <div className="col-md-1"> </div>
            </div>
        </div>
    )
}
export default Mobile;