import React from 'react';
import { Row, Col, Container } from 'react-materialize';
import WebDevCards from '../WebDevCards';


const WebDesign = () => (

<div>
<Container style={{paddingLeft:"15%", paddingRight:"15%"}}>
<Row>
  
  <Col s={12} className='grid-example' style={{background:"white", maxWidth:"100%", textAlign:"center"}}><p>In addition to the six years of WordPress experience, I really began to get serious about learning to code in the later part of 2016. I started learning by taking classes on Lynda and Udemy to prepare as much as I could for the program at Northwestern University. During my time there we learned everything from HTML to MySQL to React. Now I have helped to teach two cohorts of coders from all ranges of abilities at the University of Denver. Currently, I am a helping develop, manage, and teach the inaugural Cyber Security class.  </p></Col>
 
</Row>
</Container>


<Row>
  <Col s={3} className='grid-example'><WebDevCards style={{lineHeight:"3px"}}
        title = {"JavaScript Logic"}  
        link ={"https://ryangendel.github.io/Homework-3/"} 
        picture= {"https://www.wisdomgeek.com/wp-content/uploads/2016/07/javascript-build-tools-730x410.jpg"}
        cardTitle= {"JavaScript Logic"}
        explaination = {"In this project I used vanilla JavaScript to make a hangman game."}
        github = {"https://github.com/Ryangendel/Homework-3"}
        />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
   title = {"HandleBars & ORM"}  
   link ={"https://shielded-headland-39029.herokuapp.com/"} 
   picture= {"http://www.javacodegeeks.com/wp-content/uploads/2017/09/mvc.png"}
   cardTitle= {"HandleBars/Custom ORM"}
   explaination = {"This example shows my understanding of MVC framework using a light weight templating language. "}
   github = {"https://github.com/Ryangendel/burger"}
  />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
  title = {"Routing MVC"}  
  link ={"https://frifinder.herokuapp.com"} 
  picture= {"https://i.kisscc0.com/20180705/haq/kisscc0-social-media-computer-icons-social-engagement-down-seir-model-5b3e16a3593306.9358073015307956833654.png"}
  cardTitle= {"Routing"}
  explaination = {"Showing my ability to create routes and transfer data using my own API."}
  github = {"https://github.com/Ryangendel/FriendFinder"}
  />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
  title = {"API Integration"}  
  link ={"https://ryangendel.github.io/GIF/"} 
  picture= {"http://enosart.com/wp-content/uploads/2018/10/gears-clipart-cute-borders-vectors-animated-black-and-white-with-regard-to-gear-clipart.jpg"}
  cardTitle= {"API Integration"}
  explaination = {"Communicating with external APIs is very important, here is my first example of doing just that. "}
  github = {"https://github.com/Ryangendel/GIF"}
  />
  </Col>
</Row>

{/* SECOND LINE */}

<Row>
  <Col s={3} className='grid-example'><WebDevCards 
        title = {"React Game"}  
        link ={"https://limitless-dusk-86963.herokuapp.com/"} 
        picture= {"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}
        cardTitle= {"React Game"}
        explaination = {"Simple game programmed in React, using lifecycle methods, conditional rendering and shuffle logic."}
        github = {"https://github.com/Ryangendel/clickgame.git"}
        />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
   title = {"Web Scraper"}  
   link ={"https://mongo-scrape-du.herokuapp.com/"} 
   picture= {"https://cdn-images-1.medium.com/max/2000/1*9M7D3ZjcP48d0jJhvaje3A.png"}
   cardTitle= {"Using a NoSQL database I was able to scrape the NYT website and make notes on specific articles."}
   github = {"https://github.com/Ryangendel/web-scraper"}
  />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
  title = {"Dinner and Movie"}  
  link ={"https://ryangendel.github.io/dinner-movie/"} 
  picture= {"http://mashpeecommons.com/wp-content/uploads/2013/12/dinner-movie-siena.jpg"}
  cardTitle= {"Dinner and a Movie"}
  explaination = {"This was my first project at Northwestern, two months into learning how to code. "}
  github = {"https://github.com/Ryangendel/dinner-movie.git"}
  />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
  title = {"Flags Reimagined"}  
  link ={"https:www.flagsreimagined.com"} 
  picture= {"https://www.accenture.com/t20180706T014744Z__w___acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global/Accenture-Reimagined-featured.jpg"}
  cardTitle= {"Crowd Sourcing Creativity"}
  explaination = {"This is my final project. We created a site that takes specific items from a database and populate a menu, made a way to up and down vote flags(allowing no duplicate votes), and uploading new flags. "}
  github = {"https://github.com/Ryangendel/flagsreimagined.git"}
  />
  </Col>
</Row>


</div>

)

export default WebDesign;


