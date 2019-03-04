import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./FirstView.css";
import FadeIn from "../FadeIn/FadeIn.js"
class FirstView extends Component {
  state = {};

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {}

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  render() {
    return (

      <Container style={{ marginTop: "80px" }}>
       
       <Row >
      <Col xs="4" />
      <Col xs="4" style={{ marginTop: "40px"}}>
        <img
          src="https://i.imgur.com/NpWUQ0H.png"
          alt="profile pic"
          style={{ width: "100%", padding: "3px", marginBottom:"-15%" }}
        />
      </Col>
      <Col xs="4" />
    </Row>

        <Row>
          <Col className="textInfoBox">
            <Row>
              <Col >
                <div style={{ marginTop: "30px"}}>
                  <div className="fakeMenu">
                    <div className="fakeButtons fakeClose" />
                    <div className="fakeButtons fakeMinimize" />
                    <div className="fakeButtons fakeZoom" />
                  </div>
                  <div className="fakeScreen">
                    <p className="line1 FirstView">
                      &#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,
                      <span className="cursor1 FirstView">_</span>
                    </p>
                    <p className="line2 FirstView">
                      &nbsp;&nbsp;&ldquo;I'm a web designer.&rdquo;,
                      <span className="cursor2">_</span>
                    </p>
                    <p className="line3 FirstView">
                      &nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;
                      <span className="cursor3">_</span>
                    </p>
                    <p className="line4 FirstView">
                      ><span className="cursor4">_</span>
                    </p>
                  </div>
                </div>
                </Col>
              {/* <Col xs="12" className ="name"style={{textAlign:"center", transform: "rotate(90deg)"}}>Ryan Gendel</Col> */}
            </Row>
            <Row>
            <Col xs="12" className="sectionTitles" style={{textAlign:"center",letterSpacing:"-3px", marginTop:"3%"}}><h1>about</h1></Col>
            </Row>
            <Col xs="12" style={{marginBottom:"4%"}}><p>Starting in 2011, while I was living in the Rocky Mountains, I learned how to use graphic editing software though online resources. Then I moved down to Denver to pursue a more structured education, and in 2013 I started my first job as a graphic designer. At every company I have worked for since, I have always took the initiative to manage the website. The more I worked with code the more I began to enjoy it. This helped in the long run because by getting acquainted with web development and WordPress I was able to pick up the fundamentals of programming. Then after finishing my undergraduate degree in economics, where I learned econometrics and data analytics, I moved to Chicago and decided to really get good at coding and website development. </p> <p>Then I moved back to Denver because I was offered a TA position at the University of Denver, to help people learn to code. I did that for a year then was offered the Cyber Security class which is the same bootcamp experience but for cyber security. This was the inaugural cohort and has been very educational for students and myself.</p> </Col>
<FadeIn/> 
          </Col >
        </Row>
      </Container >
    );
  }
}

export default FirstView;
