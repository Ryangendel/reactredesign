import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Email, Item, Span, A, renderEmail } from 'react-html-email'
import axios from 'axios';


export default class ContactMe extends React.Component {
   constructor(){
       super()

    this.state ={
       name:"", 
       email:"", 
       comment:""
   }
this.handleChange = this.handleChange.bind(this)
// this.handelSubmit = this.handelSubmit.bind(this)
}

handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
}

notification = e => {;
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
     let text = e.target.text.value;

    this.setState({
        name: e.target.name.value,
        email: e.target.email.value,
        comment:e.target.text.value
      });

      document.getElementById("contactForm").reset();

      axios.post('/api/form', {
           name, 
           email,
           text
       }).then(function (res){
         
         alert("Thanks for your query " + name + ". I will get back to you ASAP!")
       
       })

}

  render() {
    return (
      <Form id="contactForm" onSubmit= {this.notification}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="John Doe" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" placeholder="youname@example.com"  />
        </FormGroup>
        {/* <FormGroup>
          <Label for="phoneNumber">Phone Number</Label>
          <Input type="telenumber" name="phoneNumber" id="phoneNumber" placeholder="555-555-5555" />
        </FormGroup> */}
        <FormGroup>
          <Label for="text">Text Area</Label>
          <Input type="text" name="text" id="I am contacting you because" />
        </FormGroup>
        <Button >Submit</Button>
      </Form>
    );
  }
}