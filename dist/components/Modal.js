import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import DialogComponent from './DialogComponent';
import { DialogGlobalStyles } from './Style';
import ModalContext from './ModalContext';

function Modal(_ref) {
  let onClose = _ref.onClose,
      appearance = _ref.appearance,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["onClose", "appearance", "children"]);

  const _useState = useState(true),
        _useState2 = _slicedToArray(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

  function close() {
    setVisible(false);

    if (onClose) {
      onClose(new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 450);
      }));
    }
  }

  function open() {
    setVisible(true);
  }

  function closeClick() {
    close();
  }

  return React.createElement(ModalContext.Provider, {
    value: {
      close,
      open
    }
  }, React.createElement(DialogGlobalStyles, {
    appearance: appearance
  }), React.createElement(DialogComponent, Object.assign({}, rest, {
    visible: visible,
    onClose: closeClick,
    appearance: appearance,
    content: children
  })));
}

export default Modal;