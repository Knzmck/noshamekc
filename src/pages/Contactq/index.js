import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
.jumbotron {
    background: rgb(249,239,172);
    background: linear-gradient(90deg, rgba(249,239,172,1) 0%, rgba(247,245,212,0.9724264705882353) 39%, rgba(242,238,209,1) 100%);
  }
    a {
        color: white;
      }
      .btn {
        background-color:#fa947e;
        color: white;
      }
      .btn:hover {
          background-color:#fa947e; ;
          border: 5px solid transparent;
          cursor: pointer;
        }
`

function Contactq() {
    return (
        <Div className="container-fluid">
            <div className="jumbotron m-5">
                <div className="text-center ">
                    <h1 className="display-4 text-center mb-4 lead">How can we help you?</h1>
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
