import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/bodyStyle.css";
import { BiCaretRight } from "react-icons/bi";

export default function Body() {
  return (
    <>
      <Container>
        <div class="ourMission">
          <img src={require("../assets/Logo_B-removebg-preview (2).png")} />
          <h2>Our Mission</h2>

          <p>
            {" "}
            To inspire and prepare youth to become productive members of their
            society and accelerate the development of the national economy{" "}
          </p>
        </div>
      </Container>

      <Container>
        <Row>
          <Col>
            <img
              style={{   display: "inline-block",  width: "13vw",  height: "15vw",  display: "block",
                margin: "auto",
              }}
              src={require("../assets/images.png")}/>

            <br />
            <Button style={{ display: "block", margin: "auto", backgroundColor: "white", color: "red", borderColor: "red",
              }}  >
              Learn More <BiCaretRight style={{ height: "20px" }} />
            </Button>
          </Col>
          <Col>
            <img style={{display: "inline-block",width: "15vw",height: "15vw",display: "block",margin: "auto",
              }}
              src={require("../assets/images (1).png")} />

            <br />
            <Button
              style={{display: "block",margin: "auto",backgroundColor: "white",color: "red",borderColor: "red",
              }}>
              Learn More <BiCaretRight style={{ height: "20px" }} />
            </Button>
          </Col>
        </Row>
      </Container>
      <div class="impact">
        <h1 style={{ textAlign: "center", paddingTop: "2vw", color: "white",fontSize:"5vh" }}>
          OUTREACH AND IMPACT
        </h1>
        <div class="parent">
          <div class="statics">
            <img class="imgs" src={require("../assets/images (1).jpg")} />
            <h3
              style={{textAlign: "center",color: "white",
              }}>
              +3,000,000+
            </h3>
            <p
              style={{ textAlign: "center", color: "white",
              }}
            >
              Training Opportunities
            </p>
          </div>
          <div class="statics">
            <img class="imgs" src={require("../assets/download (1).jpg")} />
            <h3
              style={{textAlign: "center",color: "white",
              }}
            >
              750,000+
            </h3>
            <p
              style={{textAlign: "center",color: "white",
              }}
            >
              Youth reached by you{" "}
            </p>
          </div>
          <div class="statics">
            <img class="imgs" src={require("../assets/images.jpg")} />
            <h3
              style={{textAlign: "center",color: "white",
              }}
            >
              34,000+
            </h3>
            <p
              style={{textAlign: "center",color: "white",
              }}  >
              Volunteering Opportunities
            </p>
          </div>
        </div>
      </div>
      <div class="core">
        <h1 style={{textAlign:'center',paddingTop:"3vw"}}>CORE VALUES & METHODOLOGY</h1>
      <div class='parent'>
        <div class="values">
        <div class='child'><p  class="detail">Education <br/> Development</p></div>
        </div>
        <div class="values">
        <div class='child'><p class="detail">Interpersonal<br/>  Mindset</p></div>
        </div>
        <div class="values">
        <div class='child'><p class="detail">Promoting <br/> volunteerism</p> </div>
        </div>
        </div>
      </div>
    </>
  );
}
