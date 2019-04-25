import React, { Component } from 'react';

import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';

import { withTheme } from 'styled-components';

import {DialogHeader, DialogHeaderIcon, DialogHeaderTitle, DialogHeaderSubtitle, DialogHeaderTitleContainer} from './Style';

class DialogComponent extends Component {

  renderDialogHeader = (icon, title, subtitle) => (
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
        <DialogHeaderSubtitle>
          {subtitle}
        </DialogHeaderSubtitle>
      </DialogHeaderTitleContainer>
    </DialogHeader>
  )

  render() {
    const { icon, title, subtitle, content, theme, ...rest } = this.props;
    return (
        <Dialog {...rest}
          className='dialog-component-module'
          title={this.renderDialogHeader(icon, title, subtitle)}
          animation='zoom'
          maskAnimation='fade'>
          {content}
        </Dialog>
    );
  }

}

DialogComponent.defaultProps = {
  title: 'Redwall Modal Title',
  subtitle: 'An awesome subtitle here.',
  content: <div>This is some content.</div>,
  appearance: 'primary'
}

export default withTheme(DialogComponent);
