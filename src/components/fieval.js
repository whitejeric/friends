import React from 'react';

import {Modal} from 'react-bootstrap'

export default class Fieval extends React.Component{
  constructor(){
    super();
    this.state={
      showModal: false
    };
  }

  handleClick(){
    //talk about this
    this.setState({
      showModal: true
    });
  }

  handleChange(){
    //talk about this
    const foo = this.state.showModal
    this.setState({
      showModal: !bool
    });
  }

  render(){
    const close = () => this.setState({showModal: false});

    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>Fieval</button>

        <Modal show={this.state.showModal} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Goes West
            <a href='#' onClick={close}>Goes East</a>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
