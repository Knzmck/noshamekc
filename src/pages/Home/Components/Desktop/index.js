import React from 'react';
import NoShame from '../../../../assets/NoShame_B&W.png';
import chairpic from '../../../../assets/natracare.jpg'
import DonateBtn from '../DonateBtn/index';
import AmazonBtn from '../AmazonBtn/index';
import CovidBtn from '../CovidBtn/index';
import styled from 'styled-components';

const Div = styled.div `
.card {
    background-color: #fa947e;
}
h1 {
    color: black;
    font-size: 60px;
}
.ns-img {
    width: 100%;
    height: 100%;
    opacity: 50%;
}
.container {
    position: relative;
    text-align: center;
  }
    .slogan, .slogan2 {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);  
        font-family: 'Slabo', serif;
  }
  .slogan {
    top: 25%;
  }
  .slogan2 {
      top: 38%;
  }
  .btnn {
    position: absolute;
  }
  .donate {
      top: 45%;
      left: 40%;
  }
  .amazon {
      top: 55%;
      left: 40%;
  }
  .covid {
      top: 65%;
      left: 39%;
  }
  @media (max-width: 1103px) {
    .slogan {
        top: 15%;
      }
    .slogan2 {
        top: 25%;
    }
    .donate {
        top: 35%;
        left: 30%;
    }
    .amazon {
        top: 40%;
        left: 30%;
    }
    .covid {
        top: 45%;
        left: 29%;
    }
  }
  `

const Desktop = () => {
    return (
        <Div className="container container-back">
                <div className=""><img className="ns-img" alt="No Shame Logo" src={chairpic}></img></div>
                 <h1 className="slogan">A Period Product Project</h1>
                 <h2 className="slogan2">for Kansas City's Underserved Community </h2>
                 <div className="donate btnn"><DonateBtn /></div>
                 <div className="amazon btnn"><AmazonBtn /></div>
                 <div className="covid btnn"><CovidBtn /></div>
        </Div>
        // <Div className="container">
        //     <div className="row">
        //         <div className="col-md-0"> </div>
        //         <div className="col-md-12 mt-2"><img className="ns-img" alt="No Shame Logo" src={chairpic}></img></div>
        //         <div className="col-md-0"> </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-1"> </div>
        //         <div className="col-md-10 mt-2"><p className="lead text-center card">A Period Product Project for Our Underserved Community</p></div>
        //         <div className="col-md-1"> </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-4"> </div>
        //         <div className="col-md-8"><DonateBtn /></div>
        //         <div className="col-md-1"> </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-4"> </div>
        //         <div className="col-md-8"><AmazonBtn /></div>
        //         <div className="col-md-1"> </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-4"> </div>
        //         <div className="col-md-8"><CovidBtn /></div>
        //         <div className="col-md-1"> </div>
        //     </div>
        // </Div>
    )
}
export default Desktop;