import React from 'react';
import './styles.css';
import products from '../../assets/more.jpg'
import DonateBtn from './Components/DonateBtn/index';
import AmazonBtn from './Components/AmazonBtn/index';
import CovidBtn from './Components/CovidBtn/index';
import styled from 'styled-components';

const Div = styled.div`
.ns-img {
    opacity: 50%;
}
.card {
  background-image: url(${products});
  background-position: center;
  text-align: center;
  height: 750px;
  width: 100%;
}
h1, h2, h3 {
  color: white;
}
h1 {
  font-size: 75px;
}
h2 {
  font-size: 45px;
}
  `
const Home = () => {
  return (
    <Div>
      <div className="container-fluid mt-2"> 
      <div className="card"> 
      <h1 className="slogan mt-4">A Period Product Project</h1>
      <h2 className="slogan2">for our underserved community </h2>
      <h3 className="slogan2">~ Kansas City ~</h3>
      <div className="donate btnn mt-4"><DonateBtn /></div>
      <div className="amazon btnn"><AmazonBtn /></div>
      <div className="covid btnn"><CovidBtn /></div>
      </div>
      </div>
    </Div>)

}
export default Home;