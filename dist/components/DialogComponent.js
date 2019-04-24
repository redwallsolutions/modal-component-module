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

    _this.getBodyStyle = function () {
      var backgroundColor = Style.theme(_this.props).contrast(_this.props);
      var color = Style.theme(_this.props).color(_this.props);
      return {
        backgroundColor: backgroundColor,
        color: color
      };
    };

    _this.renderDialogHeader = function (icon, title, subtitle) {
      return React.createElement(Style.DialogHeader, null, icon && React.createElement(Style.DialogHeaderIcon, null, icon), React.createElement(Style.DialogHeaderTitleContainer, null, React.createElement(Style.DialogHeaderTitle, null, title), React.createElement(Style.DialogHeaderSubtitle, null, subtitle)));
    };

    return _this;
  }

  _createClass(DialogComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bodyStyle = this.getBodyStyle();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          content = _this$props.content,
          theme = _this$props.theme,
          rest = _objectWithoutProperties(_this$props, ["icon", "title", "subtitle", "content", "theme"]);

      return React.createElement(React.Fragment, null, React.createElement(Dialog, Object.assign({}, rest, {
        className: "dialog-component-module",
        title: this.renderDialogHeader(icon, title, subtitle),
        animation: "zoom",
        maskAnimation: "fade",
        bodyStyle: this.bodyStyle
      }), content), React.createElement(Style.DialogGlobalStyles, null));
    }
  }]);

  return DialogComponent;
}(Component);

DialogComponent.defaultProps = {
  title: 'Redwall Modal Title',
  subtitle: 'An awesome subtitle here.',
  content: React.createElement("div", null, "This is some content."),
  appearance: 'primary'
};
export default withTheme(DialogComponent);