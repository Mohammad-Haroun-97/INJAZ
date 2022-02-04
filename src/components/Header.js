import React from "react";

import {
  Carousel,
  Form,
  Button,
  FormControl,
  CarouselItem,
  Container
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/HeaderStyle.css";
import { BiAlbum,FaSearch } from "react-icons/fa";
import {AiFillFacebook,AiFillAmazonCircle,AiFillAudio,AiOutlineGithub,AiOutlineGlobal,AiOutlineMail} from "react-icons/ai";
import { MdReorder } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div class="carouselDiv">
        <Carousel fade variant="primary" class="background">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../assets/istockphoto-488120139-170667a.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../assets/istockphoto-495097670-170667a.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../assets/buidling4.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div class="logoForm">
        
          <img
            class="logo"
            src={require("../assets/gg-removebg-preview.png")}
          />
          <div class="screens">
          <hr style={{backgroundColor:'white'}}></hr>
          <p class="logoTitle">New Projects For All Generations</p>
          </div>
        
          <Form className="d-flex">
            

          <div class="bar">
          
            <FormControl
              type="search"
              placeholder="Search"
              className="Search"
              aria-label="Search"
            />
              <FaSearch class='inner'/>
              </div>
              <div class='navBar' >
              <AiFillFacebook class='firstIcon'/>
              <AiFillAmazonCircle class='icon'/>
              <AiFillAudio class='icon'/>
              <AiOutlineGithub class='icon'/>
              <AiOutlineGlobal class='icon'/>
              <AiOutlineMail class='icon'/>
              </div>
              
          </Form>
         
        
        
        </div>
      </div>

      <MdReorder class='menu'/>
    </>
  );
}
