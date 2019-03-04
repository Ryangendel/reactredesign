import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import GraphicDesignCards from '../GraphicDesignCards';
import GraphicDesignCardSmall from '../graphicdesigncardsmall';
import "./graphicdesign.css";

const Graphicdesign = (props) => {
  return(
    <div>

<Container style={{paddingLeft:"15%", paddingRight:"15%"}}>
<Row>
  
  <Col s={12} className='grid-example' style={{background:"white", maxWidth:"100%", textAlign:"center", padding:"30px"}}><p>Learning graphic design started out in the most unlikely of places, I started in 2012 while I was living in the mountains of Colorado and worked at a busy pizza joint. I found out how much they were paying an agency to make coupons for tourists and were leaving a design spark to be desired. So I spoke with the owner and he paid for a few online classes and I learned InkScape. I really enjoyed this work so I decided to pursue a more structured training. I moved down to Denver and started working at a collegiate newspaper and designing all types of deliverables (from ads to 3D displays). This was the launch of my career in design and I have never looked back. </p></Col>
 
</Row>
</Container>
      
      
      <Container className ="Card" >
{/* <Row>
  <Col xs="3" className='grid-example'></Col>
  <Col xs="3" className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col xs="3" className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col xs="3" className='grid-example'></Col>
</Row> */}

<Row style={{marginBottom:"7%"}}>
  <Col className='example1'><GraphicDesignCards image={"https://i.imgur.com/d7EeYY0.jpg"} workPlace ={"Met Media"} frontTitle={"Legends of Auraria"} title={"In The Newspaper"}/></Col>
  <Col className='example2'><GraphicDesignCards image={"https://i.imgur.com/zAfcLzo.jpg"} workPlace ={"Preferred Meals"} frontTitle={"Blast Off Campaign"} title={"Wall Poster for 1000+ Schools"}/></Col>
  <Col className='example3'><GraphicDesignCards image={"https://i.imgur.com/gohjqJj.jpg"} workPlace ={"Met Media"} frontTitle={"Free Beer?"} title={"Nominated For A College Media Business and Advertising (CMBAM) Award"}/></Col>
  <Col className='example4'><GraphicDesignCards image={"https://i.imgur.com/BtzRzIsr.jpg"} workPlace ={"Preferred Meals"} frontTitle={"Marketing Collateral"} title={"Trade Show Flyer"}/></Col>
</Row>

<Row style={{marginBottom:"10%"}}>
  <Col xs="3" className='example5'><GraphicDesignCards astyle = {{background:"blue"}} image={"https://i.imgur.com/Nkw549C.jpg"} workPlace ={"Met Media"} frontTitle={"First Full Page"}  title={"First Full Page Ad"}/></Col>
  <Col xs="3" className='example6 small'><GraphicDesignCardSmall image={"https://i.imgur.com/9BkjaAu.png"} workPlace ={"Met Media"} frontTitle={"Lower 1/3"}  title={"Lower Third For Emmy Winning Newscast"}/></Col>
  <Col xs="3" className='example7 small'><GraphicDesignCardSmall image={"https://i.imgur.com/1ehfECm.png"} workPlace ={"Met Media"} frontTitle={"Lower 1/3"}  title={"Lower Third For Spanish Newscast"}/></Col>
  <Col xs="3" className='example8 small'><GraphicDesignCardSmall image={"https://i.imgur.com/nd0DV9p.png"} workPlace ={"Met Media"} frontTitle={"SES Logo"} title={"Logo For The Student Economic Society"}/></Col>
</Row >
</Container>
</div>

  );
};


export default Graphicdesign;