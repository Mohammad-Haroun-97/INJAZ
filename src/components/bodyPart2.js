import React, { useEffect } from 'react';
import {Container,Carousel,Button,Col,Row,Form} from 'react-bootstrap'
import "../components/part2.css"
import { BiCaretRight } from "react-icons/bi";
import {BsLockFill, BsPlusCircle} from 'react-icons/bs'
import {GoLocation} from "react-icons/go"
import {BsFillTelephoneForwardFill} from "react-icons/bs"
 import {AiOutlineMail} from "react-icons/ai"
 import {BsSignpostSplit} from "react-icons/bs"
 import {useState} from "react"
 import axios from "axios"

export default function BodyPart2() {

  const [contactForm,setContactForm] = useState({})
  const [data,setData]=useState({})
  
  async function formHandler(e){
    e.preventDefault()
    console.log(e);
    let name=e.target.name.value
    console.log('dddd',e.target.name);
    let email=e.target.email.value
    let phoneNumber=e.target.phoneNumber.value
    let description=e.target.description.value
    setContactForm({name:name,email:email,phoneNumber:phoneNumber,description:description
    })
    await axios.post('http://localhost:3003/addForm',contactForm).then((result)=>{
      setData(result.data)
    })
    alert(`These Date are coming From Mongo Database : Name : ${data.name} Email:${data.email} Phone Number :${data.phoneNumber} Description:${data.description}`)
  }

  return <>
  <div class="body2">

  <Container className='partners'>

  <h1>PARTNERS</h1>
  <p>INJAZ's network for international civil society organization partners plays a growing role in program development through the provision of grants and other merit-based funding opportunities </p>
  </Container>
  <Container>
  <Carousel variant='dark' className='test' indicators={false} >
          <Carousel.Item  interval={1500}>
            <img
              className="d-block sliderPartner"
              src={require("../assets/partenrs4.jpg")}
              alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block sliderPartner"
              src={require("../assets/partners.jpg")}
              alt="Third slide"/>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block sliderPartner"
              src={require("../assets/partners3.jpg")}
              alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
        <Button id="btn">Learn More <BiCaretRight class="play"/></Button>
  </Container>
  <div className='join' >
      <Row style={{padding:'2px'}}>
      <Col  className='col-md-4 item1'>
          <h2 style={{textAlign:'center',color:'white'}}> JOIN US</h2>
          <img style={{width:'100%',height:'80%',objectFit:'cover'}} src={require('../assets/istockphoto-1018103648-1024x1024-removebg-preview.png')} />
      </Col>
      <Col  className='col-sm-1.5 item2'>
          <Button variant='dark' className='joinBtn'>Volunteers</Button>
          <BsPlusCircle className='plus'/>
      </Col>
      <Col   className='col-sm-1.5 item3'>
      <Button variant='dark' className='joinBtn'>Monitors</Button>
          <BsPlusCircle className='plus'/>
      </Col>
      <Col   className='col-sm-1.5 item4'>
      <Button variant='dark' className='joinBtn'>Partners</Button>
          <BsPlusCircle className='plus'/>
      </Col>
      <Col   className='col-sm-1.5 item5'>
      <Button variant='dark' className='joinBtn'>Board</Button>
          <BsPlusCircle className='plus'/>
      </Col>
      </Row>
  </div>
  <div class="mediaCenter">
      <Row>
          <Col className='col-md-4 media1'>
              <img style={{height:'100%',marginLeft:'4vw',marginTop:"7vw"}} src={require('../assets/3422982.png')}/>
              <h3 >MEDIA CENTER</h3>
          </Col>
          <Col className='col-md-2 media'>
              <img src={require('../assets/111.jpg')}/>
              <h5>Enjoy with our Team</h5>
          </Col>
          <Col className='col-md-2 media'>
          <img src={require('../assets/2222.jpg')}/>
          <h5>Contribute effectively to our society </h5>
          </Col>
          <Col className='col-md-2 media'>
          <img src={require('../assets/4444.jpg')}/>
          <h5>The most powerful team </h5>
          </Col>
      </Row>
    <iframe  className='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.399427293436!2d35.92690468552356!3d31.950058981229557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f849f6725c3%3A0x91b3c67b427f6fae!2sEnjaz%20Center!5e0!3m2!1sar!2sjo!4v1643982379338!5m2!1sar!2sjo" width="100%" height="100%">
    </iframe>
  </div>
  <div class="hh" >
      <Row>
          <Col>
      <Container className='col-md-10 form'>
      <Form onSubmit={formHandler}>
      <h5 style={{textAlign:'center'}}>CONTACT FORM  </h5>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control style={{backgroundColor:'rgb(209, 219, 219)'}} name="name"  type="text" placeholder="Client Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control name="email" style={{width:'46%',display:'inline-block',backgroundColor:'rgb(209, 219, 219)'}} type="text" placeholder="Email " />
      <Form.Control  name="phoneNumber" style={{width:'47%',display:'inline-block',marginLeft:'2vw', backgroundColor:'rgb(209, 219, 219)'}} type="text" placeholder="Phone Number" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     <Form.Control name="description" style={{backgroundColor:'rgb(209, 219, 219)'}} as="textarea" rows={3} placeholder="Description"  />
    </Form.Group>
    <Button type='submit' onSubmit={(e)=> formHandler(e)} style={{backgroundColor:'transparent',color:'red',border:'none',display:'block',margin:'auto'}}> Send message<BiCaretRight style={{ height: "20px" }} /></Button>
    </Form>
      </Container>
      </Col>
      <Col>
      <Container className='col-md-12 contactUs'>
          <div class="lagger">
              <h4 style={{marginBottom:'2vw'}}>CONTACT US</h4>
          <div class="childLag">
              <GoLocation style={{color:'red'}} class="iconz" />
              <div>
              <p class="iconTitle">ADDRESS:</p>
              <p  class="descrip">20(MEKA STREET),salam ST</p>
              </div>
          </div>
          <div class="childLag">
              <BsFillTelephoneForwardFill style={{color:'cyan'}} class="iconz"/>
              <div>
              <p class="iconTitle">TELEPHONE</p>
              <p  class="descrip">00962656695/09625457858</p>
              </div>
          </div>
          <div class="childLag">
              <AiOutlineMail style={{color:'yellow'}} class="iconz"/>
              <div>
              <p class="iconTitle">EMAIL:</p>
              <p  class="descrip">Email.injaz@org.jo</p>
              </div>
          </div>
          <div class="childLag">
              <BsSignpostSplit style={{color:'navy'}} class="iconz" />
              <div>
              <p class="iconTitle">POST BOX:</p>
              <p class="descrip">041575,Amman</p>
              </div>
          </div>
          </div>
      </Container>
      </Col>
      </Row>
  </div>
  </div>

  </>;
}
