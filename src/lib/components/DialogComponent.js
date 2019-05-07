import React, { Component } from 'react';

import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';

import { withTheme } from 'styled-components';

import {DialogHeader, DialogHeaderIcon, DialogHeaderTitle, DialogHeaderSubtitle, DialogHeaderTitleContainer} from './Style';

class DialogComponent extends Component {

  renderDialogHeader = (appearance, icon, title, subtitle) => (
    <DialogHeader>
      {
        icon &&
        <DialogHeaderIcon>
          {icon}
        </DialogHeaderIcon>
      }
      <DialogHeaderTitleContainer>
        <DialogHeaderTitle>
          {title}
        </DialogHeaderTitle>
        <DialogHeaderSubtitle appearance={appearance}>
          {subtitle}
        </DialogHeaderSubtitle>
      </DialogHeaderTitleContainer>
    </DialogHeader>
  )

  render() {
    const { icon, title, subtitle, content, theme, appearance,  ...rest } = this.props;
    return (
        <Dialog {...rest}
          className='modal-component-module'
          title={this.renderDialogHeader(appearance, icon, title, subtitle)}
          animation='zoom'
          maskAnimation='fade'>
          {content}
        </Dialog>
    );
  }

}

DialogComponent.defaultProps = {
  title: '',
  subtitle: '',
  content: <div></div>,
  appearance: 'default'
}

export default withTheme(DialogComponent);
