import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nslogo from "../../assets/ns_new_tiny2.png";
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 30px 10px;
  }
  a:hover{
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fa947e;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li, .nav-text {
      color: #fff;
    }
  }
  .nav-text {
    font-size: 23px;
    color: white;
  }
`;;
const Burger = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
      <li><Link to="/" className="nav-text" onClick={() => setOpen(!open)}>Home</Link></li>
      <li><Link to="/contact" className="nav-text" onClick={() => setOpen(!open)}>Contact</Link></li>
      <li><Link to="/about" className="nav-text" onClick={() => setOpen(!open)}>About</Link></li>
      <li><Link to="/faq" className="nav-text" onClick={() => setOpen(!open)}>FAQ</Link></li>
      <li><Link to="/getinvolved" className="nav-text" onClick={() => setOpen(!open)}>Get Involved</Link></li>
      <li><Link to="/partners" className="nav-text" onClick={() => setOpen(!open)}>Partners</Link></li>
    </Ul>
    </>
  )
};
export default Burger;