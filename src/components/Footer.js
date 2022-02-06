import React from 'react';
import "../components/footer.css"
import {BsFacebook,BsInstagram,BsTwitter,BsSnapchat,BsYoutube,BsLinkedin} from 'react-icons/bs'



export default function Footer() {

  return <>
  <div class="footerParent">
  <div class="footerFlex">
      <div class="childFooter">
          <img style={{width:'15vw',height:'70px'}} src={require('../assets/gg-removebg-preview.png')}/>
      </div>
      <div class="childFooter">  <ul>
              <h6>About Us</h6>
              <li>Email</li>
              <li>Careers</li>
              <li>Overview</li>
              <li>Contact us</li>
          </ul>
          </div>
      <div class="childFooter">  <ul>
      <h6>Model</h6>
              <li>Social Construction</li>
              <li>PPP</li>
              <li>Practical</li>
          </ul></div>
      <div class="childFooter">  <ul>
    <h6>Partners</h6>
              <li>Social Director</li>
              <li>Partners</li>
              <li>Volunteer</li>
          </ul></div>
      <div class="childFooter">  <ul>
      <h6>Media Center</h6>
              <li>Naves</li>
              <li>Events & Adventures</li>
          </ul></div>
  </div>
  <div class="footerSocial">
      <BsFacebook class="social"/>
      <BsInstagram class="social"/>
      <BsTwitter class="social"/>
      <BsSnapchat class="social"/>
      <BsYoutube class="social"/>
      <BsLinkedin class="social"/>
  </div>
  </div>
  </>;
}

