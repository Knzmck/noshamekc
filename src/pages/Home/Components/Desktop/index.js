import React from 'react';
import NoShame from '../../../../assets/nst.png';

const Desktop = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1"> </div>
                <div className="col-md-10 mt-5"><img className="ns-img" alt="No Shame! A Period Product Project For our Houseless Community" src={NoShame}></img></div>
                <div className="col-md-1"> </div>
            </div>
        </div>
    )
}
export default Desktop;