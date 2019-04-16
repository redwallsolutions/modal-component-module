import React, { Component } from 'react';

import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';

import * as Style from './Style';

class DialogComponent extends Component {

  renderDialogHeader = (icon, title, subtitle) => (
    <Style.DialogHeader>
      <Style.DialogHeaderIcon>
        {icon}
      </Style.DialogHeaderIcon>
      <Style.DialogHeaderTitleContainer>
        <Style.DialogHeaderTitle>
          {title}
        </Style.DialogHeaderTitle>
        <Style.DialogHeaderSubtitle>
          {subtitle}
        </Style.DialogHeaderSubtitle>
      </Style.DialogHeaderTitleContainer>
    </Style.DialogHeader>
  )

  render() {
    const { icon, title, subtitle, content, ...rest } = this.props;
    return (
      <React.Fragment>
        <Dialog {...rest}
          className='dialog-component-module'
          title={this.renderDialogHeader(icon, title, subtitle)}
          animation='zoom'
        maskAnimation='fade'>
          {content}
        </Dialog>
        <Style.DialogGlobalStyles/>
      </React.Fragment>

    );
  }

}

DialogComponent.defaultProps = {
  icon: <i>ICON</i>,
  title: 'Redwall Modal Title',
  subtitle: 'An awesome subtitle here.',
  content: <div>This is some content.</div>
}

export default DialogComponent;
