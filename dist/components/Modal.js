import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import DialogComponent from './DialogComponent';
import { DialogGlobalStyles } from './Style';

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      visible: true
    };

    _this.setVisible = function (visible) {
      _this.setState({
        visible: visible
      });
    };

    _this.close = function () {
      _this.setVisible(false);

      if (_this.props.onClose) {
        _this.props.onClose(new Promise(function (resolve) {
          setTimeout(function () {
            resolve();
          }, 450);
        }));
      }
    };

    _this.open = function () {
      _this.setVisible(true);
    };

    _this.closeClick = function () {
      if (_this.props.closeClick) {
        _this.props.closeClick();
      }

      _this.close();
    };

    _this.extractModalController = function () {
      return {
        open: _this.open,
        close: _this.close
      };
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.getModalController) {
        this.props.getModalController(this.extractModalController());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          appearance = _this$props.appearance,
          closeClick = _this$props.closeClick,
          rest = _objectWithoutProperties(_this$props, ["children", "appearance", "closeClick"]);

      return React.createElement(React.Fragment, null, React.createElement(DialogGlobalStyles, {
        appearance: appearance
      }), React.createElement(DialogComponent, Object.assign({}, rest, {
        visible: this.state.visible,
        onClose: closeClick,
        tiappearance: appearance,
        content: children
      })));
    }
  }]);

  return Modal;
}(Component);

export default Modal;