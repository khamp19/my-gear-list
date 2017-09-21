import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


class GearModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  this.close = this.close.bind(this);
  this.open = this.open.bind(this);
  }

  getInitialState() {
    return { showModal: false };
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div>
        <Button
          bsStyle="info"
          bsStyle="success"
          onClick={this.open}>
          Add New Item
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Add an Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default GearModal;
