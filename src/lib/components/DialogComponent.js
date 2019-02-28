import React, { Component } from 'react';

import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';

import * as Style from './Style';

class DialogComponent extends Component {

  renderDialogHeader = () => (
    <Style.DialogHeader>
      <Style.DialogHeaderTitle>
        Modal Title
      </Style.DialogHeaderTitle>
      <Style.DialogHeaderSubtitle>
        An awesome description for Redwall Modal.
      </Style.DialogHeaderSubtitle>
    </Style.DialogHeader>
  )

  render() {
    return (
      <React.Fragment>
        <Dialog {...this.props}
          className='dialog-component-module'
          title={this.renderDialogHeader()}
          animation='zoom'
          maskAnimation='fade'>
          Qualquer Coisa Aqui
        </Dialog>
        <Style.DialogGlobalStyles/>
      </React.Fragment>

    );
  }

}

export default DialogComponent;
