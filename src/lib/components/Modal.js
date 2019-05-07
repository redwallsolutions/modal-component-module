import React, { Component } from 'react';
import DialogComponent from './DialogComponent';
import { DialogGlobalStyles } from './Style';

class Modal extends Component {

  render() {
    const { children, appearance, ...rest } = this.props;
    return (
      <>
        <DialogGlobalStyles appearance={appearance}/>
        <DialogComponent {...rest} appearance={appearance} content={children}/>
      </>
    );
  }

}

export default Modal;
