import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import 'rc-dialog/dist/rc-dialog.css';
import Dialog from 'rc-dialog';
import * as Style from './Style';

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

    _this.renderDialogHeader = function (icon, title, subtitle) {
      return React.createElement(Style.DialogHeader, null, React.createElement(Style.DialogHeaderIcon, null, icon), React.createElement(Style.DialogHeaderTitleContainer, null, React.createElement(Style.DialogHeaderTitle, null, title), React.createElement(Style.DialogHeaderSubtitle, null, subtitle)));
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
          rest = _objectWithoutProperties(_this$props, ["icon", "title", "subtitle", "content"]);

      return React.createElement(React.Fragment, null, React.createElement(Dialog, Object.assign({}, rest, {
        className: "dialog-component-module",
        title: this.renderDialogHeader(icon, title, subtitle),
        animation: "zoom",
        maskAnimation: "fade"
      }), content), React.createElement(Style.DialogGlobalStyles, null));
    }
  }]);

  return DialogComponent;
}(Component);

DialogComponent.defaultProps = {
  icon: React.createElement("i", null, "ICON"),
  title: 'Redwall Modal Title',
  subtitle: 'An awesome subtitle here.',
  content: React.createElement("div", null, "This is some content.")
};
export default DialogComponent;