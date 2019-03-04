import React from "react";
import { Parallax, Background } from "react-parallax";
import { Footer } from "react-materialize";
import WebDesign from "../WebDev/webdev.js";
import GraphicDesign from "../GraphicDesign/"
import SimpleMap from '../GoogleMaps/GoogleMaps.js'
import OtherSkills from '../OtherSkills/OtherSkills.js'
import TechLogos from '../TechLogos/TechLogos.js'
import ContactMe from "../contactMe/contactMe.js"
import FadeIn from "../FadeIn/FadeIn.js"
import FirstView from "../FirstView"
import Alert from'../alerts/alert.js';
import { Container, Col, Row } from 'reactstrap';
import Modal from '../modal/modal.js'
import '../App.css'

// https://i.imgur.com/DEXuZcd.png
const MegaBox = () => (
  <div>
    {/* http://www.allwhitebackground.com/images/2/2271.jpg
    https://images.vexels.com/media/users/3/144712/raw/6e7eef3e9fd3ffd0ea46578d8848e22c-textured-white-background.jpg
    https://acewallpaper.files.wordpress.com/2013/02/architecture-wallpaper.jpg
    https://cdn2.vectorstock.com/i/1000x1000/04/76/black-ink-paint-splatter-on-white-background-spray-vector-8550476.jpg 
    https://media.gettyimages.com/vectors/abstract-black-and-white-technology-concept-shape-background-vector-id476944025
    https://ya-webdesign.com/images/technology-background-white-png-5.png
    https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/rIdMEYfilj06epy4z/videoblocks-gray-technology-background-with-binary-codes-and-hexagons_bk0payk6x_thumbnail-full01.png
    https://www.mediagamma.com/s/background-zpy8.png
    https://i.pinimg.com/originals/e8/0e/88/e80e8899fab0e06bde7afb612a1a4f0f.jpg
    https://image.freepik.com/free-photo/empty-wooden-table-in-front-of-abstract-blurred-street-background_23-2147907213.jpg free pick
    https://image.freepik.com/free-photo/programming-code-with-laptop-background_1134-61.jpg
    https://image.freepik.com/free-photo/business-desk-with-a-keyboard-report-graph-chart-pen-and-tablet-on-white-table_1423-249.jpg
    https://image.freepik.com/free-photo/3d-background-with-globe-and-programming-code_1048-5911.jpg
    https://image.freepik.com/free-photo/programming-code-with-laptop-background_1134-61.jpg
    https://www.apstra.com/wp-content/uploads/2018/04/background_black_and_blue_abstract_1920x750.jpg
    ./images/313943-P8S7MZ-306.jpg
    https://www.mediagamma.com/s/background-zpy8.png
    https://i.pinimg.com/originals/e8/0e/88/e80e8899fab0e06bde7afb612a1a4f0f.jpg
    https://image.freepik.com/free-photo/programming-code-with-laptop-background_1134-61.jpg
    https://image.freepik.com/free-photo/3d-background-with-globe-and-programming-code_1048-5911.jpg
    https://i.pinimg.com/originals/e8/0e/88/e80e8899fab0e06bde7afb612a1a4f0f.jpg
    https://www.fg-a.com/wallpapers/white-background-geo-shapes.jpg
    */}

<Parallax strength={200}
blur={{ min: -45, max: 45 }}
>

      {/* <div>Use the background component for custom elements</div> */}
      <Background className="custom-bg" style={{marginTop:"60px", width:"110%" }}>
      <a href='https://image.freepik.com/free-photo/business-desk-with-a-keyboard-report-graph-chart-pen-and-tablet-on-white-table_1423-249.jpg'>What up</a>
        <img style={{ height: "1600px"}}src="./images/9343.jpg" alt="fill murray" />
        
      </Background>

      <FirstView />
      {/* Blur transition from min to max */}
      
      {/* <FadeIn /> */}
      {/* <TechLogos /> */}
   
    </Parallax>

    {/* <Parallax style={{height:"840px"}}
      blur={{ min: -15, max: 15 }}
      bgImageAlt="the dog"
      bgImage="./images/313943-P8S7MZ-306.jpg"
      strength={10}
    >
    <FirstView />

      <TechLogos />
    </Parallax> */}
    {/* -----custom background element-----*/}
    <Parallax strength={300}>
      {/* <div>Use the background component for custom elements</div> */}
      <Background style={{height:"400px"}}className="custom-bg">
      {/* <a href='https://www.freepik.com/free-vector/abstract-technology-background_3229222.htm'>What up</a>
        <img src="https://www.siliconluxembourg.lu/wp-content/uploads/2015/12/code-1076533_1920.jpg" alt="fill murray" />
        <div style={{ height: "500px" }} /> */}
      </Background>

      <h1 id="coding" className="sectionTitles" style={{textAlign:"center", marginBottom:"20px",letterSpacing:"-6px",fontSize:"4em", paddingTop:"55px",paddingBottom:"10px", color:"black"}}>web development</h1>
      <WebDesign />
    </Parallax>
    
    {/* GRAPHICDESIGN */}
    <div id="graphicdesign" ></div>
    <Parallax style={{background:"#1e252d"}}


      bgImage={"./images/unnamed-5.png"}
      strength={1100}
      // renderLayer={percentage => (
      //   <div
      //     style={{
      //       // position: "absolute",
      //       background: `rgba(255, 125, 0, ${percentage * 1})`,
      //       left: "50%",
      //       top: "50%",
      //       width: percentage * 500,
      //       height: percentage * 500
      //     }}
      //   />
      // )}
      
    > 
    

      <h1  className="sectionTitles"style={{textAlign:"center", marginBottom:"20px",fontSize:"4em", paddingTop:"55px",paddingBottom:"10px",letterSpacing:"-6px",color:"white"}}>graphic design</h1>
    
      <GraphicDesign />
      
    </Parallax>

    {/* OTHER */}

    <Parallax style={{background:"white"}}
      blur={10}
      // bgImage="http://globalmarketforce.com/wp-content/uploads/2018/11/Graphic-Design.png"
      bgImageAlt="the cat"
      strength={0}
    >
      <h1 id="misc" className="sectionTitles"style={{textAlign:"center", fontSize:"4em", marginBottom:"10px",paddingTop:"55px",paddingBottom:"20px", letterSpacing:"-6px", color:"black"}}>other achievements</h1>
      {/* <div style={{ height: "600px" }}/> */}
      <OtherSkills />
    </Parallax>
    
    {/* MAP */}
    <div id="contact" style={{background:"#dfe0e0", padding:"60px"}}>
          <h1  className="sectionTitles"style={{textAlign:"center", fontSize:"4em", marginBottom:"20px",letterSpacing:"-6px", color:"#1d2c33"}}>contact info</h1>
          <Container style={{marginTop:"40px", marginBottom:"0"}} className="GoogleMaps">
            <Row style={{height:"350px" }}>
            <Col xs="6" className='example8'>
          <SimpleMap />
          </Col>
          <Col xs="6" className='example8'>
          <ContactMe style={{paddingTop:"-50px"}}/>
          </Col>
          </Row>
          </Container>
          </div>      
    
    {/* FOOTER */}

    <Footer style={{backgroundColor:"#0b4f6c", border: "1px solid #20BF55;"}}
      // copyrights="&copy 2015 Copyright Text"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          &copy; Ryan Gendel 2019
        </a>
      }
      links={
        <ul style={{marginLeft:"60%"}}> 
          <li>
            
              <img src="https://img.icons8.com/metro/1600/github.png" href="https://github.com/Ryangendel/" style={{height:"40px", width:"40px", display:"inline"}}></img>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" href="https://www.linkedin.com/in/ryan-gendel" style={{height:"40px", width:"40px",marginLeft:"5%"}}></img>
          </li>
        </ul>
      }
      className="example"
    >
      <h5 className="white-text">Thanks for Visiting</h5>
      <p className="grey-text text-lighten-4">
        Also feel free to email me at <a href="mailto:gendel.ryan@gmail.com?Subject=Portfolio%20Email" target="_top">gendel.ryan@gmail.com</a>
      </p>
    </Footer>
  
    
    </div>
  
);
export default MegaBox;
