import React, { Component } from 'react';
import DialogComponent from './DialogComponent';
import { DialogGlobalStyles } from './Style';

class Modal extends Component {

  render() {
    return (
      <React.Fragment>
        <DialogComponent {...this.props}/>
        <DialogGlobalStyles/>
      </React.Fragment>
    );
  }

}

export default Modal;
