import React from 'react';
import products from '../../assets/watercolor.png';
import banner from '../../../src/assets/ns_banner.png'
import styled from 'styled-components';
import DonateBtn from './Components/DonateBtn/index';
import AmazonBtn from './Components/AmazonBtn/index';
import CovidBtn from './Components/CovidBtn/index';


const Div = styled.div`
.jumbotron {
  background-image: url(${products});
  background-position: center;
  margin: auto;
  height: 100%;
  max-width: 80%;
  padding-top: 1px;
}
img {
  max-width: 100%;
  max-height: 365px;
  box-shadow: 5px 5px 5px 5px;
  color: whitesmoke;
}
  `
const Home = () => {
  return (
    <Div>
      <div className="container-fluid mt-2 justify-content-center"> 
      <div className="jumbotron text-center">
      <img src={banner} alt="No Shame. A Period Product Project for Our Underserved Communities"></img>
      <div className="donate btnn mt-4"><DonateBtn /></div>
      <div className="amazon btnn"><AmazonBtn /></div>
      <div className="covid btnn"><CovidBtn /></div>
      </div>
      </div>
    </Div>)

}
export default Home;