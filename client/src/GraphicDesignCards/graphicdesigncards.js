import React from 'react';
import { Container, Col, Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import ModalExample from "../modal/modal.js"
import "./GraphicDesignCards.css"
const CardExample = (props) => (
  <div>
      <Card>       
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody 
        style = {{background:"white", marginTop:"-110px", width:"101%", marginLeft:"-1px"}}>
          <CardTitle className="adsLargeTit">{props.frontTitle}</CardTitle>
          <CardSubtitle style={{marginBottom:"7px"}}className="adsLargeSub">{props.workPlace}</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <ModalExample image={props.image} title={props.title}/>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      
      </div>
  );


export default CardExample;



