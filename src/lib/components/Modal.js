import React, { Component } from 'react';
import DialogComponent from './DialogComponent';
import { DialogGlobalStyles } from './Style';

class Modal extends Component {

  render() {
    const { children, ...rest } = this.props;
    return (
      <>
        <DialogGlobalStyles/>
        <DialogComponent {...rest} content={children}/>
      </>
    );
  }

}

export default Modal;
