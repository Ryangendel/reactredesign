import React from 'react';
import { Row, Col, Container, Table } from 'reactstrap';
import OtherSkillsCards from '../OtherSkillsCards';
import OtherSkillsSmall from "../OtherSkillsSmall/";

const otherSkills = () => (
<div>

<Container style={{paddingLeft:"15%", paddingRight:"15%", backgroundColor:"#F2F2F2"}}>
<Row>
  
  <Col s={12} className='grid-example' style={{paddingTop:"20px", maxWidth:"100%", textAlign:"center"}}><p>After I moved back to Denver from the mountains I have been involved in a number of projects, events, and executive boards that have achieved some remarkable feats. I sat on board for three student advisory executive committees including: the Student Advisory Board to Dean Murphy, Student Advisory Committee to the Auraria Board, and the Student Fee Review Panel. I was also chosen to be a part of the first Cyber Security class at the University of Denver, giving me the opportunity to augment the curriculum and processes that are followed. Some other achievements: </p></Col>
 
</Row>

<Row>
<Table>
        {/* <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row"></th>
            {/* <td style={{textAlign:"center"}}>On 12/3/18 I Taught A Graduate Level Class on Python.</td> */}
            {/* <td>Wrote A Story And Produced A Package For Two Emmy Winning News Casts.</td>
            <td>I Was Elected President Of The Student Economic Society at MSU Denver</td>
            <td>Wrote Numerous Oped Articles For The College Newspaper</td> */}
          </tr>
          <tr>
            <th scope="row"></th>
            <td style={{textAlign:"center"}}>Wrote A Story And Produced A Package For Two Heartland Emmy Winning Collegiate News Casts.</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td style={{textAlign:"center"}}>I Was Elected President Of The Student Economic Society at MSU Denver.</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td style={{textAlign:"center"}}>Wrote Numerous Op-Ed Articles For The College Newspaper.</td>
          </tr>
          {/* <tr>
            <th scope="row">3</th>
            <td>I Was Elected President Of The Student Economic Society at MSU Denver</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
</Row>
</Container>

<Container className="container">


<Row>
{/* <Col sm="1" className='grid-example'></Col> */}
<Col sm="6" className='grid-example'>
<OtherSkillsSmall
  title ="Statistical Analysis (B.A. of Econ)"
  image = "https://ouseful.files.wordpress.com/2011/05/pivot-table-counta.png"
  content = "Not only did my degree in economics help my approach to problems - teaching me to be more analytical, I learned some practical skills like econometrics, statistical inference, and how to triangulate data. In the past, my analysis has found data insights that lead to the release of products all over America."
  href = "https://msudenver.edu/economics/"
  link= "Program Webpage"
  />
  
  </Col>
{/* * <Col sm="1" className='grid-example'></Col>  */}

  <Col sm="6" className='grid-example'>
  <OtherSkillsSmall
  title ="Cyber Security (TA for C.S. class)"
  image = "https://gcn.com/~/media/GIG/GCN/Redesign/Articles/2017/May/cybersecurity2.png"
  content = "When the University of Denver decided to launch their first cyber security bootcamp program they hired me on as a TA. Through this I learned so much more than I thought. This has proven to help in many aspects of my career because knowing more about computer science help to have a deeper understanding of code. It also allows me to anticipate and scale my code a secure network."
  href = "https://bootcamp.du.edu/cybersecurity/"
  link="Program Webpage"
  />
  {/* <Col sm="1" className='grid-example'></Col> */}
  </Col>
  
</Row> 



<Row>
  <Col sm="3" className='grid-example'></Col>
  
  <Col sm="6" className='grid-example'>

  <OtherSkillsSmall 
  title ="Videography (Reporter/Editor)"
  image = "https://i.ytimg.com/vi/YiesMpzFYf8/maxresdefault.jpg"
  content = "For a little longer than two years I worked as a reporter for the Newscast at my College. During this time I learned many aspects of videography, from editing (including light special effects) to best practices for interviews. We worked so well as a team that we ended up winning two Regional Emmy awards for our work."
  href = "https://www.youtube.com/watch?v=4PyG87nai5A"
  link="Demo Reel"
  />
  </Col>

  {/* <Col s={6} className='grid-example'><OtherSkillsCards 
  item1="President Of the Student Economic Society"
  item2="Student Advisory Council to the Dean"
  item3="Student Fee Review Panel"
  item4="Student Advisory Committee to the Auraria Board"
  />
  </Col> */}
  <Col sm="3" className='grid-example'></Col>
  

  {/* <Col s={3} className='grid-example'><OtherSki />
  </Col> */}

</Row> 
</Container>
</div>
)

export default otherSkills;