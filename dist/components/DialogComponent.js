import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';
import { withTheme } from 'styled-components';
import { DialogHeader, DialogHeaderIcon, DialogHeaderTitle, DialogHeaderSubtitle, DialogHeaderTitleContainer } from './Style';

var DialogComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DialogComponent, _Component);

  function DialogComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DialogComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DialogComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderDialogHeader = function (appearance, icon, title, subtitle) {
      return React.createElement(DialogHeader, null, icon && React.createElement(DialogHeaderIcon, null, icon), React.createElement(DialogHeaderTitleContainer, null, React.createElement(DialogHeaderTitle, null, title), React.createElement(DialogHeaderSubtitle, {
        appearance: appearance
      }, subtitle)));
    };

    return _this;
  }

  _createClass(DialogComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          content = _this$props.content,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          rest = _objectWithoutProperties(_this$props, ["icon", "title", "subtitle", "content", "theme", "appearance"]);

      return React.createElement(Dialog, Object.assign({}, rest, {
        className: "modal-component-module",
        title: this.renderDialogHeader(appearance, icon, title, subtitle),
        animation: "zoom",
        maskAnimation: "fade"
      }), content);
    }
  }]);

  return DialogComponent;
}(Component);

DialogComponent.defaultProps = {
  title: '',
  subtitle: '',
  content: React.createElement("div", null),
  appearance: 'default'
};
export default withTheme(DialogComponent);