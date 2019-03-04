import React from 'react';
import { Button, Fade, Row, Col } from 'reactstrap';
import TechLogos from "../TechLogos/TechLogos.js"
export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <Button color="primary" style={{backgroundColor:"white", color:"#192C34"}} onClick={this.toggle}>Skills</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <TechLogos />
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};