// import React from "react";
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Ul = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-flow: row nowrap;
//   li {
//     padding: 30px 10px;
//   }
//   a:hover{
//     color: white;
//   }
//   @media (max-width: 768px) {
//     flex-flow: column nowrap;
//     background-color: #fa947e;
//     position: fixed;
//     transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
//     top: 0;
//     right: 0;
//     height: 100vh;
//     width: 200px;
//     padding-top: 3.5rem;
//     transition: transform 0.3s ease-in-out;
//     z-index: 1;
//     li, .nav-text {
//       color: #fff;
//     }
//   }
//   .nav-text {
//     font-size: 23px;
//     color: white;
//   }
// `;
// const RightNav = ({ open }) => {
// //  const handleClick= ((e) => {
// //   e.preventDefault(); 
// //   console.log("this link was clicked")
  
// // })
//   return (
//     <Ul open={open}>
//       <li><Link to="/" className="nav-text">Home</Link></li>
//       <li><Link to="/contact" className="nav-text" >Contact</Link></li>
//       <li><Link to="/about" className="nav-text" >About</Link></li>
//       <li><Link to="/faq" className="nav-text" >FAQ</Link></li>
//       <li><Link to="/getinvolved" className="nav-text">Get Involved</Link></li>
//       <li><Link to="/partners" className="nav-text">Partners</Link></li>
//     </Ul>
//   )
// }
// export default RightNav;