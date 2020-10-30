import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 50px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #003963;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li, .nav-text {
      color: #fff;
    }
  }
  .nav-text {
    font-size: 23px;
  }
`;
const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li><Link to="/" className="nav-text">Home</Link></li>
            <li><Link to="/about" className="nav-text">About</Link></li>
            <li><Link to="/faq" className="nav-text">FAQ</Link></li>
            <li><Link to="/getinvolved" className="nav-text">Get Involved</Link></li>
            <li><Link to="/contact" className="nav-text">Contact</Link></li>
        </Ul>
    )
}
export default RightNav;