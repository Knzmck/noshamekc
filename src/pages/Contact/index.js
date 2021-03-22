import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
.container{
    display: flex;
    justify-content: center;
}
h1 {
    align-text: center;
}
button {
    padding: 25px;
}
svg {
  height: 100%;
}
.fab:hover {
    opacity: 0.7;
  }
  button {
      border: transparent;
      background: rgba(247,245,212,0.9724264705882353);
        margin-right: 20px;
  }
  .email-us {
      font-size: x-large;
  }
  .jumbotron {
    background: rgb(249,239,172);
    background: linear-gradient(90deg, rgba(249,239,172,1) 0%, rgba(247,245,212,0.9724264705882353) 39%, rgba(242,238,209,1) 100%);
  }
  a {
      color: red;
  }
  a:hover {
      text-decoration: underline;
      cursor: pointer;
      color: red;
  }
  p, h1, a {
    font-family: 'Slabo 27px', serif;
    },
  p {
    font-size: x-large;
    }
    .fab {
    font-size: 2.5rem;
    }
    .fa-facebook {
       color: 	#4267B2;
    }
    .fa-twitter {
        color: #1DA1F2;
    }
    .fa-instagram {
        color: #F56040;
    }
  `

const Contact = () => {
    return (
        <Div className="container">
            <div class="jumbotron text-center mt-5">
                <p class="lead">Interested in volunteer opportunities?    <i class="fa fa-heart"></i>   Want to become a partner donation location?  <i class="fa fa-heart"></i> Have a donation that needs picked up?  <i class="fa fa-heart"></i>Have a question or comment for us?  <i class="fa fa-heart"></i> Are you in need of assistance or period products? </p>
                <h1 class="display-4 justify-content-center">Let's Connect.</h1>
                <p class="lead email-us">Email us at <a href="mailto:noshameinkc@gmail.com">NOSHAMEINKC@GMAIL.COM</a>, use our <Link to="/contactq">contact form</Link> or connect with us on Social Media.</p>
                <button alt="facebook button" onClick={() => window.open("https://www.facebook.com/NoShameInKC")}><i class="fab fa-facebook"></i></button>
                <button alt="twitter button" onClick={() => window.open("https://twitter.com/NoShameInKC")}><i class="fab fa-twitter"></i></button>
                <button alt="Instagram button" onClick={() => window.open("https://instagram.com/noshameinkc?igshid=pwa10gubhftl")}><i class="fab fa-instagram"></i></button>
            </div>
        </Div>
    )
}
export default Contact;