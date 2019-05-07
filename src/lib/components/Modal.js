import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialogComponent from './DialogComponent';
import { DialogGlobalStyles } from './Style';

class Modal extends Component {

  state = {
    visible: true
  }

  setVisible = (visible) => {
    this.setState({
      visible
    });
  }

  close = () => {
    this.setVisible(false)
    if(this.props.onClose){
      this.props.onClose(new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 450)
      }))
    }
  }

  open = () => {
    this.setVisible(true)
  }

  closeClick = () => {
    if(this.props.closeClick){
      this.props.closeClick()
    }

    this.close()
  }
  extractModalController = () => ({
    open: this.open,
    close: this.close
  })

  componentDidMount() {
    if(this.props.getModalController){
      this.props.getModalController(this.extractModalController())
    }
  }

  render() {
    const { children, appearance, closeClick, ...rest } = this.props;
    return (
      <>
        <DialogGlobalStyles appearance={appearance}/>
        <DialogComponent {...rest} visible={this.state.visible} onClose={this.closeClick} appearance={appearance} content={children}/>
      </>
    );
  }
}

Modal.propTypes = {
  getModalController: PropTypes.func.isRequired,
  closeClick: PropTypes.func,
  onClose: PropTypes.func.isRequired
}
export default Modal
