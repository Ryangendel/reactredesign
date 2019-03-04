import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './Header'
import MegaBox from './Parallax/Parallax'

// import { Parallax, Background } from 'react-parallax';
// import Parallax from './SimpleParallex/SimpleParallex';

// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
//     return body;
//   };
//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
//     this.setState({ responseToPost: body });
//   };
const App = () => (
  <Router>
    
  <div>
    {/* <NavBar />  */}
    <MegaBox />
    {/* <Wrapper> */}
      {/* <Route exact path="/" component={About} />
      <Route exact path="/about" component={GraphicDesign} /> */}
    {/* </Wrapper> */}
    {/* <Footer /> */}
  </div>
</Router>
)
export default App