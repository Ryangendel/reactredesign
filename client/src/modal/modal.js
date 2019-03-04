import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button style={{backgroundColor:"#192C34", color:"white", align:"center"}} onClick={this.toggle}>View</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <div style={{textAlign:"center"}}>
          <img style = {{height:"75%", width:"75%", textAlign:"center"}} src ={this.props.image} />
          </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button className="small" color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;