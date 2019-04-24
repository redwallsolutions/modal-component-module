import React, { Component } from 'react';
import DialogComponent from './DialogComponent';
import { DialogGlobalStyles } from './Style';

class Modal extends Component {

  render() {
    const { children, ...rest } = this.props;
    return (
      <React.Fragment>
        <DialogComponent {...this.rest} content={children}/>
        <DialogGlobalStyles/>
      </React.Fragment>
    );
  }

}

export default Modal;
