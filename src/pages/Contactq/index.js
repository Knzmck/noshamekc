import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
.jumbotron {
    background-color:  #fa957ee0;
  }
    a {
        color: white;
      }
      .btn {
        background-color:#fa947e;
        color: white;
      }
      .btn:hover {
          border: 5px solid transparent;
          cursor: pointer;
        }
h4 {
    color: white !important;
}
`

function Contactq() {
    return (
        <Div className="container-fluid">
            <div className="jumbotron m-5">
                <div className="text-center">
                    <h4 className="display-4 text-center mb-4 lead">How can we help you?</h4>
                    <p className="lead">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4"><button className="btn btn-light" onClick={() => window.open("https://rb.gy/vnlphb")}>I have a general
                                    question or comment for the No Shame team</button></div>
                                <div className="col-md-4"><button className="btn btn-light" onClick={() => window.open("https://rb.gy/qosqmk")}>I would like to
                                become a
                                    No Shame Partner or volunteer</button></div>
                                <div className="col-md-4"><button className="btn btn-light" onClick={() => window.open("https://rb.gy/jsrwb1")}>
                                    I am in need of
                                    period/hygiene
                                    products or other assistance</button>
                                </div>

                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </Div>
    )
}

export default Contactq
