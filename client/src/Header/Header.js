import React from 'react'
import {Component} from 'react'
import {Navbar, NavItem} from "react-materialize"
// import { HashLink as Link } from 'react-router-hash-link';
import "./Header.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Header extends Component {

  componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render() {
    return (
      <div className="header">

        <div className="navbar-fixed">
          <nav className="blue">
            <div className="container">
              <div className="nav-wrapper">


                <div className="row">
                  <div className="col s1">
                    <a href="#" className="sidenav-trigger" data-target= 
                    {"#" + "mobile-nav"}>
                      <i className="material-icons">menu</i>
                    </a>
                  </div>
                  <div className="col s3">
                    <a href="#" className="brand-logo"><span 
                    className="the">Super</span> Cool Brand</a>
                  </div>
                </div>


              </div>
            </div>
          </nav>
        </div>

        <ul className="sidenav" id="mobile-nav" ref={(sidenav) => 
        {this.sidenav = sidenav}}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    );
  }
}

export default Header;

// const NavBar = () => (
// <Navbar brand='logo' left>
//   <NavItem href='get-started.html'>Getting started</NavItem>
//   <NavItem href='components.html'>Components</NavItem>
// </Navbar>
// )

// const NavBar = () => (
//     <div>
//     <Navbar brand='logo'right>
//     <NavItem href='get-started.html'><Link to="/pathLink#coding">Coding</Link></NavItem>
//      <NavItem href='get-started.html'><Link to="/pathLink#graphicdesign">Graphic Design</Link></NavItem>
//      <NavItem href='get-started.html'><Link to="/pathLink#misc">Other Skills</Link></NavItem>
//      <NavItem href='get-started.html'><Link to="/pathLink#contact">Contact Me</Link></NavItem>
//     </Navbar>
// </div>
// )

//  export default NavBar