import React from "react";
import { Link } from 'react-router-dom';
import Nslogo from "../../assets/nslogo.png";
import styled from 'styled-components';
import './styles.css';
import Burger from '../Burger/index';

export default function Navbar() {
    const Nav = styled.nav`
  width: 100%;
  height: 105px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
  .navlogo {
      height: 100px;
      width: 250px;
  }
    `
    return (
        <Nav>
            <div className="logo">
                <img src={Nslogo} classname="navlogo" alt="No Shame! Logo"></img>
            </div>
            <Burger />
        </Nav>)

};