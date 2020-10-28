import React from 'react';
import NoShame from '../../../../assets/NoShameMobilet.png';

const Mobile = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8 mt-5"><img className="ns-img" alt="No Shame! A Period Product Project For our Houseless Community" src={NoShame}></img></div>
                    <div className="col-md-2"> </div>
                </div>
            </div>
        </div>
    )
}
export default Mobile;