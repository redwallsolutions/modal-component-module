import React, { Component } from 'react';

import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';

import { withTheme } from 'styled-components';
import Color from 'color';

import * as Style from './Style';

class DialogComponent extends Component {

  componentDidMount() {
    this.bodyStyle = this.getBodyStyle()
  }

  getBodyStyle = () => {
    const backgroundColor = Style.theme(this.props).contrast(this.props)
    const color = Style.theme(this.props).color(this.props)
    const borderRadius = '0 0 4px 4px'
    return {backgroundColor, color, borderRadius}
  }

  renderDialogHeader = (icon, title, subtitle) => (
    <Style.DialogHeader>
      {
        icon &&
        <Style.DialogHeaderIcon>
          {icon}
        </Style.DialogHeaderIcon>
      }
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
    const { icon, title, subtitle, content, theme, ...rest } = this.props;
    return (
        <Dialog {...rest}
          className='dialog-component-module'
          title={this.renderDialogHeader(icon, title, subtitle)}
          animation='zoom'
          maskAnimation='fade'
          bodyStyle={this.bodyStyle}
        >
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
