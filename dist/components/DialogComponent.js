import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';
import { DialogHeader, DialogHeaderIcon, DialogHeaderTitle, DialogHeaderSubtitle, DialogHeaderTitleContainer } from './Style';

function DialogHeaderComponent(_ref) {
  var appearance = _ref.appearance,
      icon = _ref.icon,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return React.createElement(DialogHeader, null, icon && React.createElement(DialogHeaderIcon, null, icon), React.createElement(DialogHeaderTitleContainer, null, React.createElement(DialogHeaderTitle, null, title), React.createElement(DialogHeaderSubtitle, {
    appearance: appearance
  }, subtitle)));
}

function DialogComponent(_ref2) {
  var appearance = _ref2.appearance,
      icon = _ref2.icon,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      content = _ref2.content,
      rest = _objectWithoutProperties(_ref2, ["appearance", "icon", "title", "subtitle", "content"]);

  return React.createElement(Dialog, Object.assign({
    className: "modal-component-module",
    title: React.createElement(DialogHeaderComponent, {
      appearance: appearance,
      icon: icon,
      title: title,
      subtitle: subtitle
    }),
    maskAnimation: "fade",
    animation: "zoom"
  }, rest), content);
}

DialogComponent.defaultProps = {
  title: '',
  subtitle: '',
  content: React.createElement("div", null),
  appearance: 'default'
};
export default DialogComponent;