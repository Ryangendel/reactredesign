import React from 'react';
import { Container, Col, Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import ModalExample from "../modal/modal.js"
import "./graphicdesigncardsmall.css"

const CardExample = (props) => (
  <div>
      <Card className="">       
        <CardImg style={{marginTop:"50px"}} src={props.image} alt="Card image cap" />
        <CardBody className="card-box">
          <CardTitle className="cardtitle">{props.frontTitle}</CardTitle>
          <CardSubtitle style={{marginBottom:"7px"}} className="cardsubtitle ">{props.workPlace}</CardSubtitle>
           {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  */}
          <ModalExample className ="small"image={props.image} title={props.title}/>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      
      </div>
  );


export default CardExample;