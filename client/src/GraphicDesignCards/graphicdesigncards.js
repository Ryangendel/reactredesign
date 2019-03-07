import React from 'react';
import { Container, Col, Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import ModalExample from "../modal/modal.js"
import "./GraphicDesignCards.css"
const CardExample = (props) => (
 
      <Card>       
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody className="card-box">
          <CardTitle className="adsLargeTit">{props.frontTitle}</CardTitle>
          <CardSubtitle style={{marginBottom:"7px"}}className="adsLargeSub">{props.workPlace}</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <ModalExample image={props.image} title={props.title}/>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      
    
  );


export default CardExample;



