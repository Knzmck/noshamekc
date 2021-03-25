import React from "react";
import Nslogo from "../../assets/ns_new_tiny2.png";
import styled from 'styled-components';
import './styles.css';
import Burger from '../Burger/index';
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const routeChange = (e) => { 
    let path = `/`; 
    history.push(path);
  }
    const Nav = styled.nav`
  width: 100%;
  height: 90px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fa947e;

  .logo {
    padding: 15px 0;
  }
button {
  background-color: #fa947e;
  border: none;
}
button:hover {
  cursor: pointer;
}
button: focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important
}
    `
    return (
        <Nav>
            <button className="logo btn" onClick={routeChange}>
                <img src={Nslogo} className="navlogo" alt="No Shame! Logo"></img>
            </button>
            <Burger />
        </Nav>)

};