import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
.container{
    display: flex;
    justify-content: center;
}
h1 {
    align-text: center;
}
.fa-facebook-square {
    padding: 20px;
    font-size: 65px;
    text-align: center;
    text-decoration: none;
    color: blue;
    margin-right: 20px;
}
.fa-google {
    padding: 20px;
    font-size: 65px;
    text-align: center;
    text-decoration: none;
    color: blue;
    margin-left: 20px;
}
.fa:hover {
    opacity: 0.7;
  }
  button {
      border: transparent;
      background: rgba(242,238,209,1) ;
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
  }`

const Contact = () => {
    return (
        <Div className="container">
            <div class="jumbotron text-center mt-5">
                <p class="lead">Interested in volunteer opportunities?    <i class="fa fa-heart"></i>   Want to become a partner donation location?  <i class="fa fa-heart"></i> Have a donation that needs picked up?  <i class="fa fa-heart"></i>Have a question or comment for us?  <i class="fa fa-heart"></i> Are you in need of assistance or period products? </p>
                <h1 class="display-4 justify-content-center">Let's Connect.</h1>
                <p class="lead email-us">Email us at <a href="mailto:noshameinkc@gmail.com">NOSHAMEINKC@GMAIL.COM</a> or message us on our Facebook page.</p>
                <button onClick={() => window.open("https://www.facebook.com/NoShameInKC")}><i className="fa fa-facebook-square"></i></button>
                <button onClick={() => window.open("https://www.gmail.com")}><i className="fa fa-google"></i></button>
            </div>
        </Div>
    )
}
export default Contact;