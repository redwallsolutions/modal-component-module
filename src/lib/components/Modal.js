import React, { Component } from 'react';
import DialogComponent from './DialogComponent';

class Modal extends Component {

  render() {
    return (
      <DialogComponent {...this.props}/>
    );
  }

}

export default Modal;
